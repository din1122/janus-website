import styled from 'styled-components';
import Header from '~/components/Header';
import { FlexColumn } from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';
// import './OnePager.scss';

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
`;

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    background: '#ffffff',
    color: '#333333'
  },
  section: {
    marginBottom: '32px',
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
    fontWeight: 'bold',
    marginBottom: '24px',
    color: '#1a237e',
    borderBottom: '3px solid #1a237e',
    paddingBottom: '8px'
  },
  headerTitle: {
    fontSize: '36px',
    fontWeight: 'bold',
    marginBottom: '16px',
    color: 'white'
  },
  sectionTitle: {
    fontSize: '24px',
    fontWeight: 700,
    marginBottom: '20px',
    color: '#1a237e'
  },
  paragraph: {
    marginBottom: '16px',
    lineHeight: '1.6',
    fontSize: '16px'
  },
  text: {
    color: '#344054',
    fontSize: '16px'
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
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)',
    transition: 'transform 0.2s ease-in-out'
  },
  cardHover: {
    transform: 'translateY(-4px)'
  },
  cardTitle: {
    fontSize: '20px',
    fontWeight: 'bold',
    marginBottom: '12px',
    color: '#1D2939'
  },
  bulletPoint: {
    marginBottom: '16px',
    paddingLeft: '24px',
    display: 'flex',
    alignItems: 'flex-start'
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
    fontWeight: 'bold',
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
    fontWeight: 'bold',
    marginBottom: '16px',
    color: '#332460'
  }
};

const OnePager = () => {
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
              Healthcare data is fragmented across outdated, noninteroperable
              systems, leading to high administrative costs and gaps in patient
              care. Janus offers a scalable Infrastructure Platform as a Service
              (IPaaS) that unifies identity, consent management, and regulatory
              compliance (HIPAA, GDPR, TEFCA).
            </p>
            <p style={styles.paragraph}>
              Our mission is to democratize healthcare, making data universally
              accessible and useful for everyone.
            </p>
          </header>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Problem Statement</h2>
            <p style={styles.paragraph}>
              Healthcare systems today face critical challenges:
            </p>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>For Patients</h3>
                <p style={styles.text}>
                  Limited access to medical records compromises continuity of
                  care and decision-making.
                </p>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>For Providers</h3>
                <p style={styles.text}>
                  Outdated systems and siloed data increase costs, create
                  inefficiencies, and reduce care quality.
                </p>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Systemic Issues</h3>
                <p style={styles.text}>
                  fragmentation of data with the need for quality of care lead
                  to unsecured channels and data exchange barriers
                </p>
              </div>
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Solution and Differentiation</h2>
            <p style={styles.paragraph}>
              A secure platform that connects healthcare ecosystem players for
              efficient, seamless data sharing.
            </p>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>For Providers</h3>
                <p style={styles.text}>
                  Portable compliant platform that improves patient onboarding
                  allowing instant access to historical medical and claims data
                  to ensure continuity of care.
                </p>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>For Patients</h3>
                <p style={styles.text}>
                  Empowers individuals with unified health and claims data
                  access with digital consent, enabling control of their health
                  records across providers globally.
                </p>
              </div>
            </div>

            <div style={styles.highlight}>
              <h3 style={styles.subsectionTitle}>Key Features:</h3>
              <div style={styles.bulletPoint}>
                <span style={styles.bulletDot}>•</span>
                <span style={styles.text}>
                  Unified health records for seamless integration across
                  systems.
                </span>
              </div>
              <div style={styles.bulletPoint}>
                <span style={styles.bulletDot}>•</span>
                <span style={styles.text}>
                  Robust security and compliance with global standards like
                  HIPAA and GDPR.
                </span>
              </div>
            </div>

            <div style={styles.highlight}>
              <h3 style={styles.subsectionTitle}>Unique Advantages:</h3>
              <div style={styles.bulletPoint}>
                <span style={styles.bulletDot}>•</span>
                <span style={styles.text}>
                  Built on international standards like FHIR for
                  interoperability.
                </span>
              </div>
              <div style={styles.bulletPoint}>
                <span style={styles.bulletDot}>•</span>
                <span style={styles.text}>
                  Designed to meet TEFCA QHIN requirements with robust HIPAA,
                  GDPR, and emerging global standards adherence.
                </span>
              </div>
              <div style={styles.bulletPoint}>
                <span style={styles.bulletDot}>•</span>
                <span style={styles.text}>
                  Patient-focused with scalable, modular solutions for various
                  clinic types.
                </span>
              </div>
              <div style={styles.bulletPoint}>
                <span style={styles.bulletDot}>•</span>
                <span style={styles.text}>
                  Strategic entry starting with dentists and aesthetics clinics,
                  with future expansion into other medical specialties.
                </span>
              </div>
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Market Opportunity</h2>
            <div style={styles.marketStats}>
              <div style={styles.marketValue}>$8.57 billion by 2030</div>
              <p style={styles.paragraph}>
                The global healthcare interoperability market, valued at $3.42
                billion in 2023, is projected to reach $8.57 billion by 2030
                (CAGR: 14.15%), driven by the demand for seamless data exchange
              </p>
            </div>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>United States</h3>
                <p style={styles.text}>
                  Government-led push toward interoperability (TEFCA, 21st
                  Century Cures Act)
                </p>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Europe</h3>
                <p style={styles.text}>
                  Strong momentum from regulations promoting upgrade to outdated
                  legacy healthcare systems.
                </p>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Israel</h3>
                <p style={styles.text}>
                  Rapidly advancing digital health ecosystem serves us as a hub
                  for healthcare innovation, with rising adoption of advanced
                  interoperability solutions.
                </p>
              </div>
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>Go to Market Strategy</h2>
            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Private Clinics</h3>
                <p>
                  Provide tailored EHR solutions as a service to improve
                  workflows and simplify onboard providers.specificity
                </p>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Patient Portal</h3>
                <p>
                  Launch a patient-facing app for real-time consent updates,
                  data sharing, and transparency.
                </p>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>Hospitals and Public Systems</h3>
                <p>
                  Achieve interoperability with fragmented networks, integrating
                  with existing infrastructures. Promote infrastructure
                  development and their support for existing system
                </p>
              </div>
            </div>
          </section>

          <section style={styles.section}>
            <h2 style={styles.sectionTitle}>
              Funding Request and Use of Funds
            </h2>
            <div style={styles.fundingSection}>
              <p style={styles.paragraph}>
                <strong>Current Round:</strong> Janus is raising{' '}
                <strong>$1.5 million via SAFE</strong>, funding up to
                <strong> 18 months</strong> of R&D and growth. This SAFE is part
                of a planned $4 million Seed round and will enable us to meet
                growing demand from potential clients and achieve key
                milestones.
              </p>
              <p style={styles.paragraph}>
                <strong>Next Steps:</strong> After completing the SAFE round, we
                will raise the remaining $2.5 million within 12 months to
                accelerate growth, expand into new markets, and scale our
                platform and team.
              </p>
            </div>

            <div style={styles.grid}>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>2025-2026 $1.5M SAFE Round</h3>
                <div style={styles.bulletPoint}>
                  <span style={styles.bulletDot}>•</span>
                  <span>
                    Implementation of the iPaaS platform to reach{' '}
                    <strong>$100K ARR by the end of 2025</strong>, capitalizing
                    on a robust client pipeline.
                  </span>
                </div>
                <div style={styles.bulletPoint}>
                  <span style={styles.bulletDot}>•</span>
                  <span>
                    Grow Janus R&D and sales teams to drive market penetration
                    and revenue growth.
                  </span>
                </div>
                <div style={styles.bulletPoint}>
                  <span style={styles.bulletDot}>•</span>
                  <span>
                    Strengthen partnerships with business stakeholders and
                    technical leaders like AWS, Databricks, and others to
                    enhance platform scalability and ensure regulatory
                    compliance.
                  </span>
                </div>
              </div>
              <div style={styles.card}>
                <h3 style={styles.cardTitle}>2026-2028 $2.5M Completion</h3>
                <div style={styles.bulletPoint}>
                  <span style={styles.bulletDot}>•</span>
                  <span>
                    Expand the Janus team to support customer growth and the
                    implementation of the platform across additional private
                    healthcare clinic segments.
                  </span>
                </div>
                <div style={styles.bulletPoint}>
                  <span style={styles.bulletDot}>•</span>
                  <span>
                    Strengthen collaboration efforts and increase market
                    awareness to drive scalable user onboarding, enhancing both
                    server-side infrastructure and customer support capacity.
                  </span>
                </div>
                <div style={styles.bulletPoint}>
                  <span style={styles.bulletDot}>•</span>
                  <span>
                    Complete the development of the Janus mobile app, marking
                    the second phase of Janus three-part goto-market strategy.
                  </span>
                </div>
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
                <p>Phone: +972 (50) 666-6976</p>
                <p>
                  Email:{' '}
                  <a
                    href="mailto:omri.cohen@janus.ac"
                    style={{ color: 'white', textDecoration: 'none' }}
                  >
                    omri.cohen@janus.ac
                  </a>
                </p>
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

export default OnePager;
