import styled from 'styled-components';
import Header from '~/components/Header';
import { FlexColumn } from '~/shared/flexes';
import { pageLayout } from '~/shared/LayoutStyle';
import './OnePager.scss';

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

const OnePager = () => {
  return (
    <>
      <Container>
        <Header />
      </Container>
      <TermsContainer className="terms-of-use-page">
        <div className="section">
          <h1>Executive Summary</h1>
          <p>
            Healthcare data is fragmented across outdated, noninteroperable
            systems, leading to high administrative costs and gaps in patient
            care. Janus offers a scalable Infrastructure Platform as a Service
            (IPaaS) that unifies identity, consent management, and regulatory
            compliance (HIPAA, GDPR, TEFCA).
          </p>
          <p>
            Our mission is to democratize healthcare, making data universally
            accessible and useful for everyone.
          </p>
        </div>
        <div className="section">
          <h2>Problem Statement</h2>
          <div className="problem-grid">
            <div className="problem-card">
              <h3>For Patients</h3>
              <p>
                Limited access to medical records compromises continuity of care
                and decision-making.
              </p>
            </div>
            <div className="problem-card">
              <h3>For Providers</h3>
              <p>
                Outdated systems and siloed data increase costs, create
                inefficiencies, and reduce care quality.
              </p>
            </div>
            <div className="problem-card">
              <h3>Systemic Issues</h3>
              <p>
                Fragmentation of data with the need for quality of care lead to
                unsecured channels and data exchange barriers.
              </p>
            </div>
          </div>
        </div>
        <div className="section">
          <h2>Solution and Differentiation</h2>
          <p>
            A secure platform that connects healthcare ecosystem players for
            efficient, seamless data sharing.
          </p>
          <ul className="feature-list">
            <li className="feature-item">
              For Providers: Portable compliant platform that improves patient
              onboarding allowing instant access to historical medical and
              claims data to ensure continuity of care.
            </li>
            <li className="feature-item">
              For Patients: Empowers individuals with unified health and claims
              data access with digital consent, enabling control of their health
              records across providers globally.
            </li>
          </ul>

          <h3>Key Features</h3>
          <ul className="feature-list">
            <li className="feature-item">
              Unified health records for seamless integration across systems.
            </li>
            <li className="feature-item">
              Robust security and compliance with global standards like HIPAA
              and GDPR.
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Market Opportunity</h2>
          <div className="market-stats">
            <div className="market-value">$8.57 billion by 2030</div>
            <p>
              The global healthcare interoperability market, valued at $3.42
              billion in 2023, is projected to reach $8.57 billion by 2030
              (CAGR: 14.15%).
            </p>
          </div>

          <ul className="feature-list">
            <li className="feature-item">
              <strong>United States:</strong> Government-led push toward
              interoperability (TEFCA, 21st Century Cures Act)
            </li>
            <li className="feature-item">
              <strong>Europe:</strong> Strong momentum from regulations
              promoting upgrade to outdated legacy healthcare systems.
            </li>
            <li className="feature-item">
              <strong>Israel:</strong> Rapidly advancing digital health
              ecosystem serves as a hub for healthcare innovation.
            </li>
          </ul>
        </div>
        <div className="section">
          <h2>Funding Request and Use of Funds</h2>
          <div className="funding-grid">
            <div className="funding-phase">
              <h3>2025-2026 $1.5M SAFE Round</h3>
              <ul className="feature-list">
                <li className="feature-item">
                  Implementation of the iPaaS platform to reach $100K ARR by the
                  end of 2025.
                </li>
                <li className="feature-item">
                  Grow Janus's R&D and sales teams.
                </li>
                <li className="feature-item">
                  Strengthen partnerships with AWS, Databricks, and others.
                </li>
              </ul>
            </div>
            <div className="funding-phase">
              <h3>2026-2028 $2.5M Completion</h3>
              <ul className="feature-list">
                <li className="feature-item">
                  Expand team to support customer growth.
                </li>
                <li className="feature-item">
                  Strengthen collaboration efforts and increase market
                  awareness.
                </li>
                <li className="feature-item">
                  Complete development of the Janus mobile app.
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="contact-info">
          <p>Phone: +972 (50) 666-6976</p>
          <p>
            Email: <a href="mailto:omri.cohen@janus.ac">omri.cohen@janus.ac</a>
          </p>
          <p>
            Website: <a href="http://www.janus.ac">www.janus.ac</a>
          </p>
        </div>
      </TermsContainer>
    </>
  );
};

export default OnePager;
