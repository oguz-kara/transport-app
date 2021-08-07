import styles from "../styles/services-section.module.scss";
import Text from "./text";
import Image from "next/image";
export default function ServicesSection({ children }) {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <Text type="yellow">welcome</Text>
        <Text type="h1" size="xLarge">
          our services
        </Text>
      </div>
      {children && (
        <div className={styles.description}>
          <Text type="p" size="xSmall">
            {children}
          </Text>
        </div>
      )}
      <div className={styles.servicesContainer}>
        <div className={styles.service}>
          <div className={styles.image}>
            <Image
              src="/assets/images/_services-1.png"
              width={71}
              height={71}
              alt="service"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <Text type="h1" size="small">
                RAPID CITY TRANSFER
              </Text>
            </div>
            <div className={styles.description}>
              We will bring you quickly and comfortably to anywhere in your city
            </div>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.image}>
            <Image
              src="/assets/images/_services-2.png"
              width={71}
              height={71}
              alt="service"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <Text type="h1" size="small">
                RAPID CITY TRANSFER
              </Text>
            </div>
            <div className={styles.description}>
              We will bring you quickly and comfortably to anywhere in your city
            </div>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.image}>
            <Image
              src="/assets/images/_services-3.png"
              width={71}
              height={71}
              alt="service"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <Text type="h1" size="small">
                RAPID CITY TRANSFER
              </Text>
            </div>
            <div className={styles.description}>
              We will bring you quickly and comfortably to anywhere in your city
            </div>
          </div>
        </div>
        <div className={styles.service}>
          <div className={styles.image}>
            <Image
              src="/assets/images/_services-4.png"
              width={71}
              height={71}
              alt="service"
            />
          </div>
          <div className={styles.content}>
            <div className={styles.title}>
              <Text type="h1" size="small">
                RAPID CITY TRANSFER
              </Text>
            </div>
            <div className={styles.description}>
              We will bring you quickly and comfortably to anywhere in your city
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
