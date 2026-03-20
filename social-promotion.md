# Guia de Divulgação Automática (Social Media)

Para o seu site "divulgar sozinho", você pode usar ferramentas que conectam o seu site às suas redes sociais. Como sou um assistente de código, não posso postar diretamente na sua conta pessoal do Facebook por questão de segurança e senhas, mas você pode configurar isso em 5 minutos seguindo os passos abaixo:

## 1. O que você precisa
Para automatizar, usaremos um serviço chamado **Zapier** (gratuito para o básico). Ele vai "vigiar" seu site e postar no Facebook toda vez que você atualizar algo.

## 2. Passo a Passo no Zapier
1.  Crie uma conta em [zapier.com](https://zapier.com).
2.  Clique em **"Create Zap"**.
3.  **Trigger (Gatilho)**: Procure por "RSS by Zapier".
    *   No campo **Feed URL**, coloque o link do seu site (ou o link do Feed XML se você tiver um). No momento, seu site é estático, então o Zapier pode usar a ferramenta **"Webhooks"** ou **"URL Watcher"**.
4.  **Action (Ação)**: Procure por **"Facebook Pages"** (ou "Facebook Groups").
5.  Conecte sua conta do Facebook.
6.  Configure a mensagem, por exemplo: *"Novo estudo bíblico disponível: {{link_do_site}}"*

## 3. Alternativa: IFTTT
O [IFTTT.com](https://ifttt.com) é ainda mais simples. Existem "receitas" prontas chamadas:
*   *"Post to Facebook when my website updates"*

## 4. O que eu já fiz para ajudar
Para que esses posts automáticos fiquem bonitos, eu já configurei:
*   **Título Chamativo**: O Google e o Facebook agora leem "Escola Bíblica Nova Jerusalém — Estudos Proféticos".
*   **Botões de Compartilhamento**: Adicionei botões de **WhatsApp** e **Facebook** no canto da tela para que seus visitantes também divulguem para você com um clique.

> [!TIP]
> Sempre que você fizer um commit no GitHub, o Netlify atualiza o site e essas ferramentas automáticas detectam a mudança e postam para você!
