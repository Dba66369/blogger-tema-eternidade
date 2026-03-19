# Como Ensinar o Robô (Chatbot)

O robô da Escola Bíblica Nova Jerusalém aprende através de um arquivo chamado `faq_library.json`.

## Como adicionar novas perguntas e respostas:

1. Localize o arquivo na pasta: `chatbot/faq_library.json`.
2. Abra o arquivo em um editor de texto (como o Bloco de Notas ou VS Code).
3. Adicione um novo bloco no final da lista, seguindo este formato:

```json
  {
    "question": "Sua pergunta aqui?",
    "answer": "Sua resposta detalhada aqui."
  }
```

> [!IMPORTANT]
> Certifique-se de colocar uma vírgula `,` entre os blocos, mas **não** coloque vírgula após o último bloco da lista.

## Dicas para melhores respostas:
- **Palavras-chave**: O robô agora é inteligente o suficiente para encontrar palavras dentro da pergunta. Se o usuário perguntar apenas "marinhos", ele encontrará a resposta sobre "Espíritos Marinhos".
- **Links**: Você pode incluir links do seu site ou da Amazon nas respostas para direcionar o aluno para o estudo completo.

Após editar e salvar, basta enviar o arquivo para o GitHub (como você faz com as páginas) e o robô estará atualizado!
