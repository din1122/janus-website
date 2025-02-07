import styled from 'styled-components';
import Header from '~/components/Header';
import MarketSizeDiagram from '~/components/MarketSizeDiagram';
import { FlexColumn } from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';

import DEMO1 from '~/assets/onepager/demo1.png';

import VIDEO_DEMO from '~/assets/onepager/video-demo.mp4';
import { IconExternalLink } from '@tabler/icons-react';

const Container = styled(FlexColumn)`
  overflow: hidden;
  margin: 28px;
  border-radius: 24px;
  background-color: #030417;
  justify-content: center;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 768px) {
    margin: 16px;
    border-radius: 16px;
  }
`;

const TermsContainer = styled.div`
  ${pageLayout}
  color: black;
  padding-top: 200px;
  & > * {
    font-family: 'Inter', serif !important;
  }
`;

const styles = {
  container: {
    maxWidth: '1000px',
    margin: '0 auto',
    background: '#ffffff',
    color: '#333333'
  },
  section: {
    marginBottom: '20px',
    background: '#ffffff',
    borderRadius: '12px',
    padding: '24px',
    border: '1px solid #E7E8EC'
  },
  header: {
    background: 'linear-gradient(135deg, #1a237e 0%, #0d47a1 100%)',
    color: 'white',
    padding: '32px 24px',
    borderRadius: '12px',
    marginBottom: '32px'
  },
  title: {
    fontSize: '32px',
    fontWeight: '700',
    marginBottom: '24px',
    color: '#1a237e',
    borderBottom: '3px solid #1a237e',
    paddingBottom: '8px'
  },
  headerTitle: {
    fontSize: '28px',
    fontWeight: '700',
    marginBottom: '16px',
    color: 'white'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: '700',
    marginBottom: '8px',
    color: '#1a237e'
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: '600',
    marginBottom: '8px',
    color: '#1D2939'
  },
  paragraph: {
    marginBottom: '16px',
    lineHeight: '1.6',
    fontSize: '1.2rem'
  },
  text: {
    color: '#344054',
    fontSize: '1.2rem'
  },
  grid: {
    display: 'grid',
    gap: '24px',
    marginTop: '24px'
  },
  card: {
    background: '#f9f9fb',
    padding: '24px',
    borderRadius: '8px',
    transition: 'transform 0.2s ease-in-out'
  },
  cardHover: {
    transform: 'translateY(-4px)'
  },

  bulletPoint: {
    marginBottom: '16px',
    paddingLeft: '24px',
    display: 'flex',
    alignItems: 'flex-start',
    fontSize: '1rem'
  },
  bulletDot: {
    color: '#1a237e',
    marginRight: '8px',
    marginLeft: '-16px'
  },
  highlight: {
    background: '#e3f2fd',
    padding: '24px',
    borderRadius: '8px',
    marginTop: '24px'
  },
  marketStats: {
    background: 'linear-gradient(135deg, #e3f2fd 0%, #bbdefb 100%)',
    padding: '24px',
    borderRadius: '8px',
    marginTop: '24px'
  },
  marketValue: {
    fontSize: '28px',
    fontWeight: '700',
    color: '#1a237e',
    marginBottom: '16px'
  },
  fundingSection: {
    background: '#f9f9fb',
    padding: '24px',
    borderRadius: '8px',
    marginTop: '24px'
  },
  subsectionTitle: {
    fontSize: '20px',
    fontWeight: '700',
    marginBottom: '16px',
    color: '#332460'
  },
  videoContainer: {
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto',
    background: '#f5f5f5',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '24px',
    overflow: 'hidden' // Ensures video respects border radius
  },
  video: {
    width: '100%',
    height: 'auto',
    display: 'block',
    borderRadius: '8px'
  },
  demoImage: {
    width: '100%',
    // height: '300px',
    background: '#e0e0e0',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px'
  }
};

const OnePagerFont = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <TermsContainer>
        <div style={styles.container}>
          <header style={styles.header}>
            <h1 style={styles.headerTitle}>Executive Summary</h1>
            <p style={styles.paragraph}>
              Healthcare data is fragmented across outdated, non-interoperable
              systems, leading to high administrative costs and gaps in patient
              care. Janus offers a scalable platform unified identity, consent
              management, while supporting regulatory compliance.
            </p>
            <p style={styles.paragraph}>
              Our mission is to democratize healthcare, making data universally
              accessible and useful.
            </p>
          </header>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Problem Statement</h2>
            <p style={styles.paragraph}>
              Healthcare providers worldwide struggle with outdated legacy
              systems and compliance with new regulations. It prevents them from
              providing secure data sharing and high-quality care.
            </p>
            <p style={styles.paragraph}>
              According to the World Health Organization (WHO), the burden of
              managing non-standardized data has led to "monolithic legacy
              digital systems and considerable technical debt in countries".
              Healthcare infrastructure transformation to be implemented by all
              OECD countries by 2028.
            </p>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Solution and Value Proposition</h2>
            <p style={styles.paragraph}>
              New secure cloud based platform that connects between healthcare
              ecosystem players for efficient and seamless data sharing serving
              new healthcare approach:
            </p>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Interoperability Framework</h3>
                <p style={styles.text}>
                  Support peer to peer data exchange between health providers
                  and payers. E.g. hospital, labs, IOT, Insurers.
                </p>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Patient Centricity</h3>
                <p style={styles.text}>
                  Empowers individuals with unified health and claims data
                  access with digital consent, enabling control of their health
                  records across providers globally.
                </p>
              </div>
              <p style={styles.text}>
                These healthcare players will benefit dramatically from the
                reduction of operational costs, privacy risks and maintenance
                burdens using compliant identity and consent management
                implementation.
              </p>
            </div>
          </section>
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Go-to-Market Strategy</h2>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>EHR for Dental and Aesthetics</h3>
                <p style={styles.text}>
                  A cloud-based, HIPAA-compliant platform tailored for
                  specialized practitioners with a freemium model that
                  simplifies practice management, improves workflows, and
                  streamlines provider onboarding.
                </p>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>FHIR enforcement</h3>
                <p style={styles.text}>
                  Fast Healthcare interoperability resources (FHIR)
                  implementation and maintenance allowing Healthcare players to
                  meet compliancy and effective data migration
                </p>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>
                  Interoperability FHIR infrastructure
                </h3>
                <p style={styles.text}>
                  Offer to Healthcare players FHIR services. Data Usage-based
                  server performing real-time peer-to-peer communication.
                </p>
              </div>
            </div>
          </section>
          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Our Products</h2>
            <div style={styles.grid}>
              <div style={styles.card}>
                {/* <h3 style={styles.cardTitle}>For Providers</h3> */}
                <p style={styles.text}>
                  Ready to use platform that improves patient onboarding
                  allowing:
                </p>
                <ul
                  style={{
                    listStyleType: 'disc',
                    paddingLeft: '20px',
                    fontSize: '1rem'
                  }}
                >
                  <li style={{ marginTop: '12px' }}>
                    Seamless integration across management systems
                  </li>
                  <li>Consent and access to external medical history</li>
                  <li>Streamline billing claim processing</li>
                  <li>Unified access to patient health records</li>
                </ul>
              </div>

              {/* <div style={styles.demoImage}>
                <img src={DEMO1} alt="Patient Portal Demo" />
              </div>
              <div style={styles.demoImage}>
                <img src={DEMO2} alt="Patient Portal Demo" />
              </div> */}
              <h2 style={styles.sectionTitle}>Demo</h2>
              <div style={styles.videoContainer}>
                <video
                  style={styles.video}
                  src={VIDEO_DEMO}
                  controls
                  playsInline
                  poster={DEMO1} // Optional: use one of your demo images as poster
                  preload="metadata"
                />
              </div>
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Market Opportunity</h2>
            <MarketSizeDiagram />
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Funding Request and Use of Funds
            </h2>
            <div style={styles.fundingSection}>
              <p style={styles.paragraph}>
                <strong>Current Round:</strong> Janus is raising{' '}
                <strong>$1.5 million via SAFE</strong>, funding up to{' '}
                <strong>18 months</strong> of R&D and growth. This SAFE is part
                of a planned $4.5 million Seed round.
              </p>
              <p style={styles.paragraph}>
                <strong>Next Steps:</strong> After completing the SAFE round, we
                will raise the remaining $3 million within 12 months.
              </p>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>
                  2025-2026 - $1.5M Pre-Seed (SAFE)
                </h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={styles.bulletPoint}>
                    <span style={styles.bulletDot}>•</span>
                    <span>
                      Achieve early traction: Deployment in 100 dental and
                      aesthetics clinics and reach a minimum of $400K ARR.
                    </span>
                  </li>
                  <li style={styles.bulletPoint}>
                    <span style={styles.bulletDot}>•</span>
                    <span>
                      Build and launch the MVP with core interoperability
                      features.
                    </span>
                  </li>
                  <li style={styles.bulletPoint}>
                    <span style={styles.bulletDot}>•</span>
                    <span>
                      Automated consent management and predictive patient
                      onboarding using AI modules.
                    </span>
                  </li>
                </ul>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>
                  2026-2027 - $3M Seed (Completion)
                </h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={styles.bulletPoint}>
                    <span style={styles.bulletDot}>•</span>
                    <span>
                      Deployment in 150 dental and aesthetics clinics and reach
                      a minimum of $1M ARR.
                    </span>
                  </li>
                  <li style={styles.bulletPoint}>
                    <span style={styles.bulletDot}>•</span>
                    <span>
                      Product AI functionalities: predictive analytics and
                      data-driven decision making.
                    </span>
                  </li>
                  <li style={styles.bulletPoint}>
                    <span style={styles.bulletDot}>•</span>
                    <span>
                      Launch Janus patient-facing app and begin market expansion
                      into selected US and EU regions.
                    </span>
                  </li>
                </ul>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Series A ($5M+; 2027-2029)</h3>
                <ul style={{ listStyleType: 'none', padding: 0 }}>
                  <li style={styles.bulletPoint}>
                    <span style={styles.bulletDot}>•</span>
                    <span>
                      Deployment in 750 dental and aesthetics clinics and reach
                      a minimum of $4M ARR.
                    </span>
                  </li>
                  <li style={styles.bulletPoint}>
                    <span style={styles.bulletDot}>•</span>
                    <span>
                      Scale operations globally and extend the platform to
                      additional healthcare horizontally.
                    </span>
                  </li>
                  <li style={styles.bulletPoint}>
                    <span style={styles.bulletDot}>•</span>
                    <span>
                      Fully embed AI across the platform and achieve dominant
                      market share in target segments.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section
            style={{ ...styles.section, background: '#1a237e', color: 'white' }}
          >
            <div style={{ ...styles.grid, marginTop: 0 }}>
              <div>
                <h3 style={{ ...styles.cardTitle, color: 'white' }}>
                  Contact Information
                </h3>
                <p style={{ fontSize: '18px' }}>
                  Phone:{' '}
                  <a
                    href="https://wa.me/972506666976"
                    style={{
                      textDecoration: 'underline',
                      display: 'inline-flex',
                      gap: '4px'
                    }}
                  >
                    +972 (50) 666-6976 <IconExternalLink />
                  </a>
                </p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:omri.cohen@genus.ac"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    omri.cohen@janus.ac
                  </a>
                </p>
                <p>Address: Aharon Bekar 1A, Tel Aviv, Israel</p>
                <p>
                  Website:{' '}
                  <a
                    href="http://www.janus.ac"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    www.janus.ac
                  </a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </TermsContainer>
    </>
  );
};

export default OnePagerFont;
