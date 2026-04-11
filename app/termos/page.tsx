import type { Metadata } from "next";
import { LegalPageShell } from "../components/LegalPageShell";
import { siteConfig } from "../siteConfig";

export const metadata: Metadata = {
  title: "Termos e Condições",
  description:
    "Condições gerais de uso do site da Gate80 e diretrizes básicas sobre orçamentos, serviços e atendimento.",
};

export default function TermosPage() {
  return (
    <LegalPageShell
      eyebrow="+ Legal"
      title="Termos e condições"
      intro="Estes termos definem as regras gerais de uso do site da Gate80, das páginas publicadas pela marca e da relação inicial com quem envia consultas, pedidos de proposta e mensagens comerciais."
      glyph="✷"
    >
      <section className="space-y-3 border-b border-[#e4e4e4] pb-6">
        <p className="text-sm uppercase tracking-[0.18em] text-[#6a6a6a]">
          Escopo
        </p>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Estes termos se aplicam ao uso institucional do site, aos formulários
          de contato e às informações publicadas sobre serviços, projetos,
          ofertas e processos da Gate80.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          1. Uso do site
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          O site da Gate80 tem finalidade institucional e comercial, servindo
          para apresentar serviços, projetos e canais de contato. O uso do site
          deve ser feito de maneira lícita e sem tentativa de comprometer seu
          funcionamento.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          2. Informações e conteúdo publicado
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          A Gate80 busca manter textos, exemplos, preços de referência e
          apresentações atualizados, mas pode revisar conteúdos sempre que for
          necessário para refletir melhor o negócio, a operação e os serviços
          ativos.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          3. Orçamentos e propostas
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Valores, prazos e escopos exibidos no site podem funcionar como
          referência inicial. Cada projeto pode exigir validação específica e
          proposta personalizada antes da contratação.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          4. Propriedade intelectual
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Textos, layout, identidade visual, código e apresentação do site são
          protegidos e não podem ser copiados, reproduzidos ou redistribuídos
          sem autorização prévia da Gate80, exceto quando houver permissão
          expressa.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          5. Links externos e plataformas terceiras
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          O site pode direcionar para plataformas externas, como redes sociais,
          email e ferramentas de formulário. Cada serviço externo possui suas
          próprias regras de uso e privacidade.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          6. Limites de responsabilidade
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          A Gate80 busca manter as informações do site claras e atualizadas, mas
          pode alterar conteúdos, estruturas, serviços e preços sem aviso
          prévio, sempre que necessário para evolução do negócio.
        </p>
      </section>

      <section className="space-y-3">
        <h2 className="text-[1.8rem] font-extrabold tracking-[-0.05em] text-[#181818]">
          7. Contato oficial
        </h2>
        <p className="text-base leading-relaxed text-[#4f4f4f] sm:text-lg">
          Para dúvidas sobre estes termos, contato comercial ou atendimento
          geral, fale com a Gate80 pelo email {siteConfig.email} ou pelo
          WhatsApp {siteConfig.whatsappDisplay}.
        </p>
      </section>
    </LegalPageShell>
  );
}
