export default function Footer() {
  return (
    <footer className="bg-[#2c2c2c] text-gray-300 mt-[60px] px-5 py-10 text-center">
      <div className="max-w-[1000px] mx-auto">
        <div className="text-lg font-bold text-white mb-5">
          ©2025 Spyzap - Todos os Direitos Reservados
        </div>

        <div className="text-xs leading-relaxed text-gray-400 text-justify md:text-center">
          Esta plataforma tem finalidade exclusivamente informativa e é voltada
          para auxiliar pais, responsáveis legais e profissionais autorizados a
          entenderem ferramentas de monitoramento de dispositivos, sempre dentro
          dos limites da legislação vigente e com o devido consentimento.
          <br />
          <br />
          Este site não é parte do site do Google ou do Google Inc. Além disso,
          este site não é endossado pelo Google de nenhuma forma. Google é uma
          marca registrada de Google, Inc. O conteúdo e as informações presentes
          neste site são de responsabilidade exclusiva do proprietário do
          domínio.
          <br />
          <br />
          Este site segue as diretrizes e políticas de publicidade do Google
          Ads. Todas as informações aqui apresentadas são de caráter educativo e
          informativo.
          <br />
          <br />
          Resultados podem variar de pessoa para pessoa. Nenhuma garantia de
          resultado é feita. O uso deste site implica na aceitação dos nossos{" "}
          <a
            href="/termos-de-uso.html"
            className="text-green-500 font-bold hover:text-green-600 underline"
          >
            Termos de Uso
          </a>{" "}
          e{" "}
          <a
            href="/politica-privacidade.html"
            className="text-green-500 font-bold hover:text-green-600 underline"
          >
            Política de Privacidade
          </a>
          .
        </div>
      </div>
    </footer>
  );
}
