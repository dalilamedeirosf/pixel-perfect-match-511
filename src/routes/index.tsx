import { createFileRoute } from "@tanstack/react-router";
import logo from "@/assets/cc-logo.png";
import cover from "@/assets/cc-cover.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Sessão Diagnóstico — Felipe Amaral | Craque em Construção" },
      {
        name: "description",
        content:
          "Relatório de Performance — Diagnóstico completo do atleta Felipe Amaral pela mentoria Craque em Construção.",
      },
    ],
  }),
});

const sections: { num: string; title: string; paragraphs: string[] }[] = [
  {
    num: "01",
    title: "RELATÓRIO DE PERFORMANCE",
    paragraphs: ["Avaliação Técnica, Mental, Física e Familiar do Atleta"],
  },
  {
    num: "02",
    title: "PERFIL E CONTEXTO DE DESENVOLVIMENTO",
    paragraphs: [
      "Eu percebi que o atleta está inserido em uma escolinha de futebol, onde treina de forma estruturada há cerca de 3 a 4 anos. O dado da frequência diária de treinos, “todos os dias”, mostra um comprometimento raro para a idade e o nível, o que é muito positivo. Além disso, o atleta já participou de competições federadas, o que traz um ritmo e contato com o jogo de verdade, contra adversários que costumam cobrar não só técnica, mas cabeça. Na prática do futebol de base, isso significa que ele já tem uma base importante, mas ainda está em um ambiente inicial, onde a formação técnica e psicológica precisam caminhar lado a lado. O que pode acontecer, se não houver cuidado, é o atleta se perder no meio da pressão da competição e na rotina intensa sem direcionamento adequado. Quem está no campo verá um garoto disposto, intensity alto, e que já joga com certa confiança, mas pode oscilar por causas que vamos explorar. O ideal aqui é manter essa frequência de treinos, mas alinhando com orientações técnicas e comportamentais claras, para não virar treino por treino no famoso “vai que dá certo”. Medir o avanço será simples: observar progressos técnicos semana a semana e manter o jogador envolvido em competições com objetivos claros.",
    ],
  },
  {
    num: "03",
    title: "ANÁLISE TÉCNICA APROFUNDADA",
    paragraphs: [
      "Nesse ponto, chama atenção que o atleta “assume protagonismo” durante os jogos e que seu “melhor desempenho é no jogo”, não nos treinos. Isso revela um talento natural para jogar sob pressão, algo que todo técnico busca: quem aparece na hora do jogo tem aquele brilho que realmente decide. Porém, o que me preocupa é que este comportamento de ponta pode ser ofuscado pela “falta de concentração”, apontada como fator limitante. Na prática, isso significa que seu talento e protagonismo podem ir por água abaixo se ele não conseguir manter foco nos momentos que menos brilham, como treinos técnicos ou momentos estratégicos do jogo. Já vi muitos atletas assim, que jogam bem só quando a torcida está em peso ou o jogo é decisivo, e acabam não se desenvolvendo porque não se dedicam aos detalhes. Em campo, o técnico vai notar um atleta eletrizante, mas que perde a bola em lances simples ou se dispersa fácil, entregando espaço ao adversário. O trabalho aqui precisa ser constante foco em treinos específicos sobre atenção, com exercícios que exijam concentração máxima e simulem pressão. Vale investir em sessões curtas diárias, com acompanhamento do treinador e feedback constante. Medir o progresso vai ser por meio de avaliações construtivas de treino para jogo, buscando transitar o talento da hora do jogo para o dia a dia.",
    ],
  },
  {
    num: "04",
    title: "ANÁLISE MENTAL E PSICOLÓGICA",
    paragraphs: [
      "Na minha experiência, o atleta tem uma mentalidade forte para sua idade. Ele “usa o erro como motivação” – isso é uma baita qualidade e já mostra uma cabeça madura. Também “gosta de competir”, dobra repetido, e isso é sinal de que a pressão externa, que costuma ser um monstro para muitos, aqui pode ser combustível. O maior desafio mental que aparece, porém, é o “ambiente confuso”, que ele enfrenta hoje e que tem travado o seu desenvolvimento. No mundo do futebol de base, ambiente confuso pode ser um monte de coisa: mudança de treinador, pressão exagerada, conflitos familiares, escola, etc. Isso desorganiza a mente do atleta, gera ansiedade e desconcentração. Se não for tratado, esse ambiente pode minar até o melhor talento, porque o futebol além do físico e técnica é uma guerra psicológica diária. Em campo, quem assiste vai perceber um jogador que tem momentos brilhantes, mas que às vezes parece perdido, toma decisões erradas que não refletem seu potencial. O trabalho estratégico requer suporte psicológico, conversas abertas, monitoramento constante e possivelmente envolvimento de psicólogo do esporte. Isso tem que ser feito semanalmente, com espaço para o atleta expressar suas dúvidas e medos, e com o time e família alinhados. O avanço é medido pelo aumento da concentração, redução dos momentos de travamento e melhoria nas decisões em jogos.",
    ],
  },
  {
    num: "05",
    title: "ANÁLISE FÍSICA",
    paragraphs: [
      "Aqui temos pontos muito interessantes: ele dorme em média 7 horas por noite, o que está dentro do recomendado para um jovem atleta, ainda que o ideal sempre é tentar chegar a 8 para recuperação total. A alimentação dele é “bem orientada” e o tempo de tela limitado a menos de 1 hora por dia ajuda a preservar a energia para os treinos. Treinar “todos os dias” é um sinal claro de alta exposição física que precisa ser monitorada para evitar lesões e fadiga. Tudo isso mostra que o atleta tem um ambiente bastante favorável para crescer fisicamente, mas cuidado: a intensidade diária pode ser uma faca de dois gumes. Já vi atleta perder o pique por excesso de treino sem descanso adequado. Caso isso não seja integrado com recuperação ativa, alongamento e avaliação física periódica, a sequência será de lesões e burnout. Em campo, pode aparecer um atleta que cai de rendimento durante o jogo, que reclama de dores e evita contato físico. O que precisa ser feito é um plano de treinamento e recuperação balanceado, com supervisão próxima do preparador físico da escolinha e acompanhamento semanal, com checagem de fadiga e critérios de descanso. Medir válvula pela disposição do atleta e ausência de dores frequentes no treino e jogo.",
    ],
  },
  {
    num: "06",
    title: "CONTEXTO FAMILIAR E IMPACTO EM PERFORMANCE",
    paragraphs: [
      "O que me chama atenção aqui é a clareza da família sobre o futebol como “prioridade clara” e o envolvimento “pais + outro responsável” na rotina do atleta. Isso é ouro no futebol de base. Além disso, após jogos ruins, a família “ajuda a tirar aprendizados” e nas vitórias, “celebra evolução e atitude”. Isso mostra uma base emocional saudável que fortalece o jogador. Na prática, temos o ambiente ideal para que o atleta venha bem preparado psicologicamente para desafios, pois sabe que vai ter apoio e que o foco é crescimento, não pressão cega. Porém, o “ambiente confuso” que o jogador sente pode estar vindo de outras fontes — clube, escola, amigos — porque aqui a família parece estar alinhada. A falta de mais detalhes sobre esses outros ambientes é justamente um ponto onde precisamos estar atentos. Se não houver sintonia com todos os espaços onde o atleta transita, pode haver desgaste. Quem observa o atleta vê que ele tem motivação em casa, mas por vezes esconde insegurança. É fundamental manter essa rede familiar ativa, com comunicação semanal aberta e envolvimento do técnico para identificar qualquer fator externo que possa frustrar o jovem. O sucesso da integração familiar será medido pelo relato de segurança emocional do atleta e pela diminuição de situações de bloqueio.",
    ],
  },
  {
    num: "07",
    title: "GARGALOS IDENTIFICADOS",
    paragraphs: [
      "Aqui a gente vê dois problemas que não se conversam de imediato, mas que podem estar ligados: a “falta de concentração” que limita o desempenho e o “ambiente confuso” que gera travamento. Isso cria a primeira inconsistência clara: o atleta tem boa cabeça para usar erro como motivação, mas seu foco é frágil. Outro ponto que mereceria atenção é o volume diário de treino, que pode estar contribuindo para esse ambiente confuso interno e desgaste mental. O que me chama atenção é que os pais reportam estar dispostos a apenas “ajustes básicos”, o que pode limitar o processo de destravamento. Na prática, temos um talento promissor que pode ficar pelo caminho por falta de investimento mais aprofundado em suporte técnico e psicológico. Se esses gargalos não forem tratados com seriedade, o que vejo em campo são oscilações erráticas, indecisão e possível desistência precoce. O desafio é superar a contradição entre o talento mental para competir e o ambiente mental que ainda não favorece 100% o crescimento.",
    ],
  },
  {
    num: "08",
    title: "POTENCIAL PROJETADO",
    paragraphs: [
      "O maior sonho do atleta, ser profissional, está cristalino, e os pais reconhecem que é “difícil, mas possível”. Esse reconhecimento realista é raro e muito importante para a caminhada. Considerando técnica, mentalidade competitiva e suporte familiar saudável, o potencial projetado é muito alto, especialmente se o ambiente confuso for melhor organizado. Na base brasileira, vejo muitos atletas com sonhos similares, mas sem suporte alinhado, estagnando. Aqui, se o atleta receber plano estruturado para foco e manejo mental, combinado com treinamento físico adequado e técnico constante, ele pode sim chegar a mais alto nível. Mas sem isso, o risco é perder a chance no momento decisivo da adolescência.",
    ],
  },
  {
    num: "09",
    title: "PLANO ESTRATÉGICO INTEGRADO",
    paragraphs: [
      "O que precisa ser feito envolve vários pontos a serem trabalhados em conjunto. No aspecto técnico, dedicar treinos específicos para atenção e controle emocional, com exercícios que desafiem a concentração, diário com feedback do treinador. Seriam sessões curtas, mas focadas no mindset, 3 a 4 vezes por semana. Já no mental, a inserção de um acompanhamento psicológico leve, semanal, para lidar com o ambiente confuso que afeta o atleta, com foco em autoconhecimento e resiliência. A família deve ser mantida como parceira ativa, participando de reuniões mensais para alinhar como ajudar o atleta em casa. Na parte física, monitoramento do volume dos treinos para garantir recuperação, com orientação do preparador físico, e atenção à qualidade do sono que, apesar de dentro da média, pode melhorar um pouco. A alimentação já está bem orientada, então deve ser mantida e monitorada. Esse plano deve ser coordenado pela escolinha, com apoio da família, e revisado a cada oito semanas para ajustes. Ferramentas simples, como diário de treino e avaliações periódicas, vão ajudar a medir os avanços e identificar imprevistos.",
    ],
  },
  {
    num: "10",
    title: "CONCLUSÃO ESTRATÉGICA",
    paragraphs: [
      "O atleta tem muitos ingredientes para construir uma carreira promissora: protagonismo no jogo, gosto de competir, apoio familiar consistente e sonhos claros. Mas está preso em uma armadilha de falta de concentração e ambiente mental confuso que podem travar um talento que, convenhamos, não é fácil encontrar. O que está em jogo é justamente a passagem da promessa para o atleta de evolução constante, e isso exige investimento emocional e técnico para destravar o processo. A boa notícia é que a família está disposta a ajustes básicos, e com isso o caminho já fica menos tortuoso. Minha recomendação é não se acomodar com o “básico”: a base já existe, o passo agora é refinar, organizar e fortalecer essa estrutura. Essa é a hora de criar rotina séria de foco mental e equilíbrio, porque no futebol brasileiro, a diferença quem faz é a cabeça e a constância. Acredito que, com esse direcionamento, vamos transformar o sonho de ser profissional em algo palpável. Vamos juntos nessa caminhada?",
    ],
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-[#0b0b0b] text-stone-100 font-sans">
      {/* Capa */}
      <section className="min-h-screen flex flex-col items-center justify-center text-center px-6 py-24 border-b border-white/10">
        <p className="text-xs uppercase tracking-[0.4em] text-stone-400 mb-10">
          Sessão Diagnóstico
        </p>
        <img src={logo} alt="Craque em Construção" className="h-40 w-auto mb-10" />
        <h1 className="text-3xl md:text-4xl font-bold tracking-[0.3em] uppercase">
          Craque em Construção
        </h1>
        <p className="mt-4 text-sm uppercase tracking-[0.4em] text-stone-400">
          Mentoria Esportiva
        </p>
      </section>

      {/* Página 2 — Capa do relatório */}
      <section className="px-6 py-24 max-w-5xl mx-auto border-b border-white/10">
        <img
          src={cover}
          alt="Craque em Construção"
          className="w-full max-w-2xl mx-auto mb-12 rounded-sm"
        />
        <p className="text-center text-xs uppercase tracking-[0.4em] text-stone-400 mb-4">
          Relatório de Performance
        </p>
        <h2 className="text-center text-2xl md:text-3xl font-semibold uppercase tracking-wider mb-10">
          Diagnóstico Completo do Atleta
        </h2>
        <p className="text-center text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Felipe Amaral
        </p>
        <p className="text-center text-sm text-stone-400 italic">
          Relatório exclusivo para a família de Felipe Amaral
        </p>
      </section>

      {/* Seções */}
      <article className="max-w-3xl mx-auto px-6 py-20 space-y-16">
        {sections.map((s) => (
          <section key={s.num}>
            <header className="mb-6 flex items-baseline gap-4 border-b border-white/10 pb-3">
              <span className="text-stone-500 font-mono text-sm">{s.num}</span>
              <h3 className="text-lg md:text-xl font-bold uppercase tracking-wide">
                {s.title}
              </h3>
            </header>
            <div className="space-y-4 text-stone-300 leading-relaxed text-[15px] md:text-base text-justify">
              {s.paragraphs.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>
          </section>
        ))}
      </article>

      <footer className="text-center text-xs text-stone-500 uppercase tracking-[0.3em] py-12 border-t border-white/10">
        Craque em Construção — Mentoria Esportiva
      </footer>
    </main>
  );
}
