import { useEffect } from "react";
import { EnrollmentForm } from "@/components/EnrollmentForm";
import { PillarCard } from "@/components/PillarCard";
import { FAQItem } from "@/components/FAQItem";
import { StudentGallery } from "@/components/StudentGallery";
import { Accordion } from "@/components/ui/accordion";
import rodrygoMurari from "@/assets/rodrygo-murari.jpg";
import jocimaraAnjos from "@/assets/jocimara-anjos.jpg";
import { VideoPlayer } from "@/components/VideoPlayer";

const Index = () => {
  useEffect(() => {
    // Meta Pixel is loaded in index.html, PageView fires automatically
  }, []);

  return (
    <div className="min-h-screen relative">
      <div className="geometric-numbers" aria-hidden="true">
        <div className="number-float">1</div>
        <div className="number-float">2</div>
        <div className="number-float">3</div>
        <div className="number-float">4</div>
        <div className="number-float">5</div>
        <div className="number-float">6</div>
        <div className="number-float">7</div>
        <div className="number-float">8</div>
        <div className="number-float">9</div>
      </div>

      <section className="relative md:py-12 z-10 px-[15px] py-[5px]">
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-center mb-8">
            <img
              alt="Instituto DespertaMente"
              className="h-20 md:h-28 w-auto animate-fade-in"
              src="/lovable-uploads/80f81ce8-3e86-4c85-861e-48dfe700a84d.png"
            />
          </div>

          <div className="text-center mb-8 animate-fade-in">
            <h1 className="hero-headline">
              <span className="headline-line highlight text-center text-2xl md:text-4xl">
                IDM Pelo Brasil de Psicanalise: Uma imersao presencial em
                Curitiba para quem quer aprender, vivenciar e aplicar a
                psicanalise integrativa com clareza.
              </span>
            </h1>
            <h2 className="text-lg md:text-2xl text-muted-foreground mt-4 mb-2 font-semibold">
              Com Rodrygo Murari e Jocimara Anjos: Saia com ferramentas
              praticas de autoconhecimento, certificado e material de apoio
              exclusivo para aplicar imediatamente.
            </h2>

            <div className="w-full max-w-3xl mx-auto mb-6 -mx-[15px] md:mx-auto">
              <VideoPlayer />
            </div>

            <div className="text-lg md:text-xl text-muted-foreground space-y-2 max-w-3xl mx-auto">
              <div className="bg-card/50 border-2 border-primary/40 rounded-xl p-4 mt-4 mb-2">
                <p className="text-primary font-bold text-xl mb-2">
                  19 de Setembro em Curitiba - PR!
                </p>
                <p className="font-semibold text-foreground text-base">
                  Vagas limitadas! Garanta sua vaga agora.
                </p>
              </div>
              <div className="flex flex-wrap justify-center gap-4 text-sm md:text-base mt-4">
                <span className="flex items-center gap-1">
                  Certificado de conclusao
                </span>
                <span className="flex items-center gap-1">
                  Material de apoio exclusivo
                </span>
                <span className="flex items-center gap-1">
                  Vagas limitadas
                </span>
              </div>
              <p className="text-2xl md:text-3xl font-bold text-primary mt-4">
                Garanta sua vaga por apenas R$37,90.
              </p>
            </div>
          </div>

          <div className="animate-fade-in">
            <EnrollmentForm />
          </div>
        </div>
      </section>

      <StudentGallery />

      <section className="md:py-8 relative z-10 px-[15px] py-[5px]">
        <div className="section-container section-highlight">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
            O QUE VOCE VAI DESCOBRIR NESTA IMERSAO PRESENCIAL
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Os 3 pilares do IDM Pelo Brasil de Psicanalise - conteudo pratico
            que voce aplica no mesmo dia
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <PillarCard
              icon="🧠"
              title="O Despertar"
              subtitle="Entenda como sua mente realmente funciona"
              items={[
                "Teoria do aparelho psiquico - entenda consciente, pre-consciente e inconsciente e como eles guiam suas decisoes",
                "Teoria estrutural - descubra como id, ego e superego atuam por tras dos seus comportamentos",
                "Portas para o inconsciente - aprenda a identificar os sinais que sua mente usa pra se comunicar com voce",
                "Fundamentos da psicanalise integrativa - a base teorica aplicada de forma pratica e descomplicada",
              ]}
              footer="A base teorica traduzida em linguagem simples e aplicavel"
            />

            <PillarCard
              icon="❤️"
              title="A Cura"
              subtitle="Liberte-se de padroes que travam sua vida"
              items={[
                "Herancas traumaticas - identifique o que voce carrega sem perceber e comece a se libertar",
                "Narcisismo - efeitos da falta e do excesso - entenda como isso molda relacionamentos e autoestima",
                "Psicanalise aplicada a autoestima - ferramentas praticas pra fortalecer sua relacao consigo mesmo",
                "Setting terapeutico na pratica - vivencie tecnicas reais usadas em atendimento",
              ]}
              footer="Ferramentas praticas pra comecar sua propria transformacao"
            />

            <PillarCard
              icon="👁️"
              title="A Revelacao"
              subtitle="Encare o que sua mente evita olhar de frente"
              items={[
                "Pulsao de morte - compreenda esse conceito central e seu impacto no dia a dia",
                "O efeito do estresse - como ele se instala na mente e no corpo, e o que fazer a respeito",
                "Atos suicidas - acolhimento e compreensao psicanalitica de um tema urgente",
                "Integracao final - una os 3 pilares em uma visao completa de si mesmo",
              ]}
              footer="Uma virada de chave na forma como voce entende a propria mente"
            />
          </div>
        </div>
      </section>

      <section className="md:py-8 relative z-10 px-[15px] py-[5px]">
        <div className="section-container">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex justify-center mb-8">
              <img
                alt="Instituto DespertaMente"
                className="h-20 md:h-28 w-auto"
                src="/lovable-uploads/80f81ce8-3e86-4c85-861e-48dfe700a84d.png"
                loading="lazy"
              />
            </div>
            <h2 className="md:text-4xl font-bold text-foreground mb-6 text-2xl">
              QUEM ESTA POR TRAZ DESTE PROJETO?
            </h2>
            <div className="text-lg text-muted-foreground space-y-4 leading-relaxed">
              <p>
                O Instituto DespertaMente e referencia em desenvolvimento
                humano, integrando Psicanalise, PNL, Hipnose e Numerologia
                Pitagorica Sistemica.
              </p>
              <p>
                Nossa missao e clara: tornar o autoconhecimento acessivel
                atraves de experiencias transformadoras, vivencias profundas e
                formacoes de altissima qualidade.
              </p>
              <p className="font-semibold text-primary text-xl price-shine">
                Nao e apenas teoria. E transformacao real na vida de centenas de
                participantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-8 relative z-10 px-[15px] py-0">
        <div className="section-container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-12">
              CONHECA SEUS PROFESSORES
            </h2>

            <div className="grid md:grid-cols-2 gap-12">
              <div className="flex flex-col items-center text-center">
                <img
                  src={rodrygoMurari}
                  alt="Rodrygo Murari"
                  loading="lazy"
                  className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover border-4 border-primary/30 shadow-2xl"
                />
                <div className="mt-4">
                  <p className="text-2xl font-bold text-foreground">
                    Rodrygo Murari
                  </p>
                  <p className="text-primary font-semibold">
                    Fundador e Professor Especialista
                  </p>
                </div>
                <div className="text-muted-foreground space-y-4 leading-relaxed mt-4">
                  <p>
                    Com mais de{" "}
                    <span className="text-primary font-bold">5.000 HORAS</span>{" "}
                    de atendimentos somados em setting terapeutico,
                    experiencias, treinamentos e mentorias, Rodrygo Murari e
                    especialista em Metafisica Comportamental e PNL Sistemica.
                  </p>
                  <p>Seu proposito? Levar uma "Psicanalise Descomplicada".</p>
                  <p>
                    Sua abordagem revolucionaria da Psicanalise Integrativa tem
                    transformado a vida de centenas de pessoas no Brasil e na
                    Europa.
                  </p>
                </div>
              </div>

              <div className="flex flex-col items-center text-center">
                <img
                  src={jocimaraAnjos}
                  alt="Jocimara Anjos"
                  loading="lazy"
                  className="w-56 h-56 md:w-64 md:h-64 rounded-2xl object-cover border-4 border-primary/30 shadow-2xl"
                />
                <div className="mt-4">
                  <p className="text-2xl font-bold text-foreground">
                    Jocimara Anjos
                  </p>
                  <p className="text-primary font-semibold">
                    Coordenadora e Professora Especialista
                  </p>
                </div>
                <div className="text-muted-foreground space-y-4 leading-relaxed mt-4">
                  <p>
                    Especialista em Luto e Depressao, sua abordagem
                    psicanalitica vem carregada de sutileza e mudancas
                    incriveis no setting terapeutico.
                  </p>
                  <p>
                    Tambem e Master Coach com foco em analise comportamental e
                    Practitioner em PNL.
                  </p>
                  <p>
                    Com mais de{" "}
                    <span className="text-primary font-bold">1.000 HORAS</span>{" "}
                    focadas no empoderamento feminino, leva a serio como a
                    mulher psicanalista deve ter resultados impressionantes a
                    partir do trabalho profissional.
                  </p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-4 pt-8">
              <span className="flex items-center gap-2 text-primary">
                Experiencia comprovada
              </span>
              <span className="flex items-center gap-2 text-primary">
                Metodologia exclusiva
              </span>
              <span className="flex items-center gap-2 text-primary">
                Comprometimento com resultados reais
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="md:py-8 relative z-10 px-[15px] py-[5px]">
        <div className="section-container section-highlight">
          <div className="max-w-4xl mx-auto">
            <h2 className="md:text-4xl font-bold text-center text-foreground mb-8 text-2xl">
              POR QUE UMA IMERSAO PRESENCIAL TAO ACESSIVEL?
            </h2>
            <div className="text-lg text-muted-foreground space-y-4 leading-relaxed mb-8">
              <p className="text-center">
                Voce deve estar se perguntando: "Como uma imersao presencial de
                um dia inteiro, com certificado, pode custar apenas R$37,90?"
              </p>
              <p className="font-semibold text-primary text-xl text-center">
                A resposta e simples: nossa missao e democratizar o
                autoconhecimento.
              </p>
              <p className="text-center font-semibold text-foreground">
                Este nao e um encontro online generico. E uma imersao
                presencial, com a profundidade e a interacao que so o contato
                direto pode oferecer.
              </p>
              <p className="text-center">
                Queremos que VOCE tenha acesso a ferramentas poderosas de
                transformacao, independente da sua situacao financeira.
              </p>
              <p className="text-center">
                O investimento simbolico de R$37,90 garante seu compromisso e
                nossa capacidade de organizar o melhor evento possivel.
              </p>
              <p className="text-center text-primary font-bold">
                Aproveite: a proxima turma sera pelo valor integral. Esta e uma
                oportunidade unica.
              </p>
            </div>

            <div className="bg-card border-2 border-primary rounded-2xl p-8 text-center">
              <div className="flex justify-center gap-8 mb-6 flex-wrap">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Valor real da experiencia:
                  </p>
                  <p className="text-3xl font-bold line-through text-muted-foreground">
                    R$ 497
                  </p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    Seu investimento hoje:
                  </p>
                  <p className="text-4xl font-bold price-shine">R$ 37,90</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Economia:</p>
                  <p className="text-3xl font-bold text-primary">R$ 459,10</p>
                </div>
              </div>
              <p className="text-2xl font-bold price-shine">
                Sim, voce esta economizando 92%!
              </p>
            </div>

            <div className="mt-8 bg-card/50 border border-primary/30 rounded-xl p-6">
              <h3 className="text-2xl font-bold text-center text-primary mb-6">
                O QUE ESTA INCLUSO:
              </h3>
              <div className="grid md:grid-cols-2 gap-3 text-muted-foreground">
                {[
                  "Imersao presencial completa (8 horas)",
                  "Certificado de conclusao reconhecido",
                  "Material de apoio exclusivo",
                  "Ferramentas praticas de autoconhecimento aplicadas na hora",
                  "Cafe e networking",
                  "Suporte durante o evento",
                  "Acesso ao grupo exclusivo de participantes",
                  "Bonus surpresa no dia",
                ].map((item, index) => (
                  <p key={index} className="flex items-center gap-2">
                    {item}
                  </p>
                ))}
              </div>
              <p className="text-center text-xl font-bold price-shine mt-6">
                TUDO ISSO POR R$37,90!
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            ULTIMAS VAGAS DISPONIVEIS!
          </h2>
          <p className="text-xl text-primary font-semibold mb-8">
            Nao perca esta oportunidade unica - proxima turma pelo valor
            integral
          </p>
          <div className="text-lg text-muted-foreground space-y-4 mb-8 leading-relaxed">
            <p>Esta e uma imersao presencial com vagas limitadas.</p>
            <p>
              Quando acabarem as vagas, nao havera mais oportunidade de
              participar nesta turma por esse valor promocional.
            </p>
            <p>A proxima turma (se houver) sera pelo valor integral de R$ 497.</p>
            <div className="py-6 space-y-2">
              <p className="font-semibold text-primary text-xl">
                Voce esta a apenas 1 clique de transformar sua visao
              </p>
              <p className="font-semibold text-primary text-xl">
                Sao apenas R$37,90 - menos que um almoco
              </p>
              <p className="font-semibold text-primary text-xl">
                Risco zero e retorno infinito
              </p>
            </div>
            <p className="text-xl">
              A escolha e sua: continuar sem respostas ou descobrir seu
              verdadeiro proposito.
            </p>
          </div>

          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <button className="w-full max-w-md mx-auto h-auto py-4 px-6 text-lg md:text-xl font-bold bg-primary hover:bg-primary/90 text-primary-foreground rounded-xl shadow-2xl hover:shadow-primary/50 transition-all duration-300 hover:scale-105">
              Ultimas Vagas: Garanta Sua Imersao Presencial por R$37,90!
            </button>
          </a>

          <div className="flex flex-wrap justify-center gap-6 mt-8 text-sm text-muted-foreground">
            <p className="flex items-center gap-2">
              + de 500 participantes ja viveram esta experiencia
            </p>
            <p className="flex items-center gap-2">98% de taxa de satisfacao</p>
            <p className="flex items-center gap-2">
              Metodologia comprovada ha mais de 10 anos
            </p>
          </div>
        </div>
      </section>

      <section className="py-6 md:py-8 px-4 relative z-10">
        <div className="section-container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-foreground mb-4">
              PERGUNTAS FREQUENTES
            </h2>
            <p className="text-center text-muted-foreground mb-12 text-xl">
              Tire Suas Duvidas Antes de Garantir Sua Vaga
            </p>

            <Accordion type="single" collapsible className="space-y-4">
              <FAQItem
                value="faq-1"
                question="Nunca estudei psicanalise. Esta imersao e para mim?"
                answer="SIM! Este encontro foi desenvolvido especialmente para iniciantes. Voce nao precisa de conhecimento previo. Vamos comecar do zero e voce saira do evento com ferramentas praticas de autoconhecimento ja prontas pra aplicar."
              />
              <FAQItem
                value="faq-2"
                question="Por que apenas R$37,90? Qual e a pegadinha?"
                answer="Nao ha pegadinha! Nossa missao e democratizar o autoconhecimento. O valor simbolico garante seu compromisso com a experiencia e cobre custos basicos de material. Queremos que o maximo de pessoas possam ter acesso a essa transformacao."
              />
              <FAQItem
                value="faq-3"
                question="O certificado e reconhecido?"
                answer="Sim! Voce recebera um certificado de conclusao emitido pelo Instituto DespertaMente, valido como comprovacao de participacao e aprendizado em Psicanalise Integrativa."
              />
              <FAQItem
                value="faq-4"
                question="Quando e onde sera a imersao?"
                answer="A imersao sera realizada no dia 19/09 (Sabado), das 09h as 17h, presencial na R. Vereador Washington Luiz, 509 - Jardim Social - Curitiba-PR. As informacoes detalhadas serao enviadas imediatamente apos sua inscricao, por WhatsApp."
              />
              <FAQItem
                value="faq-5"
                question="E se eu nao puder comparecer depois de pagar?"
                answer="Entre em contato conosco com 48h de antecedencia. Avaliaremos a possibilidade de transferir sua vaga para a proxima turma ou realizar o reembolso integral."
              />
              <FAQItem
                value="faq-6"
                question="Preciso levar algum material?"
                answer="Nao! Todo material didatico esta incluso. Voce so precisa levar voce mesmo, com mente aberta e vontade de aprender. Recomendamos trazer uma garrafa de agua e um caderno extra se quiser fazer anotacoes pessoais."
              />
              <FAQItem
                value="faq-7"
                question="Vou conseguir aplicar as ferramentas de psicanalise depois do encontro?"
                answer="COM CERTEZA! A imersao e 100% pratica. Voce vai vivenciar as tecnicas durante o evento e saira de la com ferramentas reais de autoconhecimento pra aplicar no seu dia a dia."
              />
              <FAQItem
                value="faq-8"
                question="O pagamento e seguro?"
                answer="Absolutamente! Utilizamos uma plataforma de pagamento segura. Seus dados estao 100% protegidos e voce recebera confirmacao imediata do pagamento."
              />
            </Accordion>
          </div>
        </div>
      </section>

      <footer className="py-12 px-4 border-t border-border relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <div className="flex justify-center mb-6">
            <img
              alt="Instituto DespertaMente"
              className="h-16 w-auto"
              src="/lovable-uploads/b4dec95d-4969-4772-a141-d5494b0b2efc.png"
              loading="lazy"
            />
          </div>
          <p className="text-xl font-semibold text-foreground">
            Instituto DespertaMente
          </p>
          <p className="text-muted-foreground">
            Transformando vidas atraves do autoconhecimento
          </p>

          <div className="space-y-2 text-muted-foreground">
            <p className="flex items-center justify-center gap-2">
              contato@institutodespertamente.com.br
            </p>
            <p className="flex items-center justify-center gap-2">
              WhatsApp: (11) 97537-9719
            </p>
            <p className="flex items-center justify-center gap-2">
              R. Vereador Washington Luiz, 509 - Jardim Social - Curitiba-PR
            </p>
          </div>

          <div className="pt-6">
            <p className="text-muted-foreground mb-4">
              Siga-nos nas redes sociais:
            </p>
            <div className="flex justify-center gap-6">
              <a
                href="https://www.instagram.com/institutodespertamente/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/institutodespertamente"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.youtube.com/@institutodespertamente"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:text-primary/80 transition-colors"
              >
                YouTube
              </a>
            </div>
          </div>

          <div className="pt-6 border-t border-border text-sm text-muted-foreground">
            <p>© 2026 Instituto DespertaMente. Todos os direitos reservados.</p>
            <p>CNPJ: 55.184.481/0001-24</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
