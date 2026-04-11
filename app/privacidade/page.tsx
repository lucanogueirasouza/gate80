import type { Metadata } from "next";
import { LegalPageShell } from "../components/LegalPageShell";
import { siteConfig } from "../siteConfig";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description:
    "Informações sobre como a Gate80 lida com dados enviados pelo site, formulários e canais de contato.",
};

export default function PrivacidadePage() {
  return (
    <LegalPageShell
      eyebrow="+ Legal"
      title="Política de privacidade"
      intro="Aqui explicamos de forma objetiva como a Gate80 coleta, usa, armazena e protege dados enviados pelo site, pelo formulário e pelos canais de atendimento."
      glyph="✦"
    >
      <section className="space-y-3 border-b border-[#e4e4e4] pb-6">
        <p className="text-sm uppercase tracking-[0.18em] text-[#6a6a6a]">
          Última atualização
        </p>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Esta política se aplica ao domínio {siteConfig.domain} e aos canais
          oficiais da Gate80 usados para contato comercial e atendimento.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          1. Quais dados podemos receber
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Podemos receber nome, email, telefone, mensagem, detalhes do projeto
          e outras informações que você enviar voluntariamente ao entrar em
          contato com a Gate80.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          2. Como usamos essas informações
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Usamos esses dados para responder contatos, entender demandas,
          elaborar propostas, acompanhar conversas comerciais e organizar a
          prestação de serviços da Gate80.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          3. Compartilhamento de dados
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Não vendemos dados pessoais. Informações só podem ser compartilhadas
          quando isso for necessário para operação técnica do site, cumprimento
          legal ou execução de ferramentas de formulário, hospedagem e email.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          4. Base e finalidade do tratamento
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Tratamos dados com base no seu consentimento, na execução de medidas
          pré-contratuais, no atendimento a solicitações e em interesses
          legítimos relacionados à operação comercial e técnica da Gate80.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          5. Formulários e ferramentas terceiras
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          O formulário do site poderá usar serviços de terceiros para envio e
          organização das mensagens. Quando essa integração estiver ativa,
          aplicaremos a ferramenta com configuração mínima necessária para o
          atendimento.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          6. Tempo de retenção
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Mantemos dados somente pelo tempo necessário para responder
          solicitações, conduzir conversas comerciais, cumprir obrigações legais
          e manter registros essenciais de operação.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          7. Seus direitos
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Você pode solicitar acesso, correção ou exclusão de dados enviados,
          quando aplicável. Para isso, basta entrar em contato pelo email{" "}
          <a
            href={`mailto:${siteConfig.email}`}
            className="font-semibold text-[#181818] underline underline-offset-4"
          >
            {siteConfig.email}
          </a>
          .
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          8. Contato
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Responsável pelo site: {siteConfig.name}. Base de operação:{" "}
          {siteConfig.address}. Email principal: {siteConfig.email}.
        </p>
      </section>
    </LegalPageShell>
  );
}
