import React from 'react';
import styles from './Hero.module.css';

const INTENTIONS = {
  first: [
    'Pelas famílias carentes',
    'Pelo nosso papa',
    'Pelos idosos',
    'Pela conversão dos pecadores',
    'Pelo grupo pascom',
    'Pelas crianças órfãs',
    'Pelas vítimas de desastres naturais',
    'Pelos desempregados',
    'Pelas pessoas em situação de rua',
    'Pela reconciliação nas famílias',
    'Pelas vítimas de violência doméstica',
    'Pelos refugiados em busca de paz',
    'Pelas mães solteiras',
    'Pelas vítimas de tráfico humano',
    'Pelas pessoas afetadas pela pandemia',
  ],
  second: [
    'Pelas vocações religiosas e sacerdotais',
    'Pela unidade entre as religiões',
    'Pelos doentes e sofredores',
    'Pelas crianças e jovens',
    'Pelas escolas e educadores',
    'Pelo grupo de coroinhas',
    'Pelos trabalhadores da saúde',
    'Pelos missionários em terras distantes',
    'Pela pastoral da juventude',
    'Pelas vocações matrimoniais',
    'Pelas vítimas de abuso',
    'Pelos cientistas e pesquisadores',
    'Pelos artistas que inspiram com a beleza',
    'Pelas vítimas do tráfico de drogas',
    'Pelas almas no purgatório',
  ],
  third: [
    'Pelos líderes políticos e pela justiça',
    'Pelos que enfrentam dificuldades financeiras',
    'Pela defesa e respeito à vida',
    'Pelos que sofrem discriminação e injustiças',
    'Pela força e missão da Igreja',
    'Pelo jmp',
    'Pelos agricultores e trabalhadores rurais',
    'Pelos cuidadores de idosos',
    'Pelos prisioneiros e seus familiares',
    'Pelos migrantes em busca de uma vida melhor',
    'Pelos desabrigados e deslocados',
    'Pelas vítimas de desastres industriais',
    'Pelas crianças não nascidas',
    'Pelos casais que enfrentam dificuldades conjugais',
    'Pelos anciãos isolados e solitários',
  ],
};

const Hero = () => {
  return (
    <section className={styles.container}>
      <h1 className={styles.title}>Meu Santo Rosário</h1>

      <div className={styles.carouselContainer}>
        <div className={styles.carouselWrapper}>
          <div className={styles.carousel}>
            {INTENTIONS.first.map((intention, index) => (
              <div key={index} className={styles.carouselBox}>
                <p className={styles.carouselText}>{intention}</p>
              </div>
            ))}
          </div>
          <div className={styles.carousel}>
            {INTENTIONS.second.map((intention, index) => (
              <div key={index} className={styles.carouselBox}>
                <p className={styles.carouselText}>{intention}</p>
              </div>
            ))}
          </div>
          <div className={styles.carousel}>
            {INTENTIONS.third.map((intention, index) => (
              <div key={index} className={styles.carouselBox}>
                <p className={styles.carouselText}>{intention}</p>
              </div>
            ))}
          </div>
        </div>
        <span className={styles.carouselFade}></span>
      </div>
    </section>
  );
};

export default Hero;
