import os
import json
import urllib.request
from datetime import datetime, timezone

AFFILIATE_LINKS = {}
STUDY_LINKS = {}

def handler(event, context):
    query = event.get('queryStringParameters') or {}
    book = query.get('book')
    study = query.get('study')

    if not book:
        return {'statusCode': 302, 'headers': {'Location': '/'}}

    is_study = study == '1' and book in STUDY_LINKS
    destination = STUDY_LINKS[book] if is_study else AFFILIATE_LINKS.get(book, '/')
    click_type = 'study' if is_study else 'amazon'

    if destination == '/':
        return {'statusCode': 302, 'headers': {'Location': '/'}}

    headers = event.get('headers') or {}
    ip = headers.get('x-forwarded-for', headers.get('client-ip', ''))
    user_agent = headers.get('user-agent', '')
    timestamp = datetime.now(timezone.utc).isoformat()

    sheets_id = os.environ.get('SHEETS_ID')
    google_token = os.environ.get('GOOGLE_API_TOKEN')
    if sheets_id and google_token:
        try:
            url = f"https://sheets.googleapis.com/v4/spreadsheets/{sheets_id}/values/A1:append?valueInputOption=USER_ENTERED"
            data = {"values": [[timestamp, book, click_type, ip, user_agent]]}
            req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'))
            req.add_header('Authorization', f'Bearer {google_token}')
            req.add_header('Content-Type', 'application/json')
            urllib.request.urlopen(req, timeout=2)
        except:
            pass

    ga_id = os.environ.get('GA_MEASUREMENT_ID')
    ga_secret = os.environ.get('GA_API_SECRET')
    if ga_id and ga_secret:
        try:
            url = f"https://www.google-analytics.com/mp/collect?measurement_id={ga_id}&api_secret={ga_secret}"
            data = {
                "client_id": ip or "unknown",
                "events": [{
                    "name": f"click_{click_type}",
                    "params": {"book": book, "type": click_type}
                }]
            }
            req = urllib.request.Request(url, data=json.dumps(data).encode('utf-8'))
            req.add_header('Content-Type', 'application/json')
            urllib.request.urlopen(req, timeout=2)
        except:
            pass

    return {
        'statusCode': 302,
        'headers': {'Location': destination}
    }
