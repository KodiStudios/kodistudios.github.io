import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

interface FeatureItem {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: React.ReactNode;
}

const FeatureList: FeatureItem[] = [];

interface FeatureProps {
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  title: string;
  description: React.ReactNode;
}

function Feature({ Svg, title, description }: FeatureProps): React.ReactElement {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): React.ReactElement {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
