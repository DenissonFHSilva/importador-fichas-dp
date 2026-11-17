# Como gerar o APK (sem instalar nada no PC)

O GitHub (site gratuito) monta o APK para você, na nuvem. Você só envia estes arquivos e clica em um botão.

## Parte 1 - Criar conta e repositório (uma vez só)
1. Entre em https://github.com e clique em **Sign up** (crie a conta gratuita).
2. No canto superior direito: **+ > New repository**.
3. Nome: `importador-fichas-apk`. Marque **Private** (privado). Clique em **Create repository**.

## Parte 2 - Enviar os arquivos
1. Extraia o ZIP `ImportadorFichasDP_apk_projeto.zip` no seu PC.
2. Na página do repositório, clique em **uploading an existing file** (ou **Add file > Upload files**).
3. Abra a pasta extraída e arraste PARA DENTRO da página TUDO que está nela: as pastas `www`, `scripts`, `.github` e os arquivos `package.json`, `capacitor.config.json`, `.gitignore`.
   (Arraste o conteúdo, não a pasta de fora.)
4. Role até o fim e clique em **Commit changes**.

Conferência: na página do repositório devem aparecer `www`, `scripts`, `.github`, `package.json`...
Se a pasta `.github` NÃO aparecer (alguns navegadores pulam pastas com ponto):
**Add file > Create new file**, no nome digite `.github/workflows/gerar-apk.yml` e cole o conteúdo do arquivo
`.github/workflows/gerar-apk.yml` do ZIP. Clique em **Commit changes**.

## Parte 3 - Gerar o APK
1. Aba **Actions** (no topo do repositório). Se pedir, clique em **I understand my workflows, go ahead and enable them**.
2. Clique em **Gerar APK** (lista à esquerda) > botão **Run workflow** > **Run workflow** (verde).
3. Espere uns 5 a 8 minutos. Quando aparecer um círculo verde com check, abra a execução.
4. Em **Artifacts**, no fim da página, clique em **ImportadorFichasDP-apk** para baixar um ZIP. Dentro há o `app-debug.apk`.
   Se der erro (círculo vermelho), clique nele, copie a mensagem e me mande.

## Parte 4 - Instalar no celular Android
1. Passe o `app-debug.apk` para o celular (WhatsApp, e-mail, Drive ou cabo).
2. Toque no arquivo. O Android vai pedir para **permitir instalar apps desconhecidos** desta fonte: permita.
3. Se aparecer aviso do Google Play Protect, toque em **Instalar mesmo assim** (o app não está na loja).
4. Abra **Importador de Fichas DP**, escolha os PDFs e use normalmente. Ao gerar a planilha, abre a tela de compartilhar do Android
   (salve em Arquivos/Drive ou envie por WhatsApp/e-mail).

## Para atualizar o app depois
Substitua os arquivos no repositório (principalmente `www/index.html`), rode **Run workflow** de novo e instale o novo APK por cima (os dados do histórico são mantidos).

## Perguntas comuns
- **É seguro/pago?** Gratuito. É um APK de teste ("debug"), assinado com chave de teste: serve para uso interno. Para a Play Store seria preciso outra assinatura.
- **Precisa de internet?** Só para gerar o APK. O app funciona offline e os PDFs não saem do aparelho.
- **iPhone?** Não: APK é só Android.
