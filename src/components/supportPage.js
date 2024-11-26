import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGlobe,
  faDollarSign,
  faUsers,
  faBriefcase,
  faReceipt,
  faRocket,
} from '@fortawesome/free-solid-svg-icons';
import "../../src/assets/css/supportPage.css";


const SupportPage = () => {
  const supportItems = [
    {
      icon: faGlobe,
      title: 'Language Support',
      description: 'Learn how to use iTranslate to communicate effectively in over 100 languages.',
    },
    {
      icon: faDollarSign,
      title: 'Pricing Plans',
      description: 'Explore our affordable plans and payment options for premium translation services.',
    },
    {
      icon: faUsers,
      title: 'User Management',
      description: 'Manage your account, subscription, and profile settings with ease.',
    },
    {
      icon: faBriefcase,
      title: 'Professional Translation',
      description: 'Get professional translations for businesses, schools, and global teams.',
    },
    {
      icon: faReceipt,
      title: 'Billing & Receipts',
      description: 'View and manage your invoices and billing history in your account.',
    },
    {
      icon: faRocket,
      title: 'Offline Features',
      description: 'Discover how to use our offline mode for translations without internet access.',
    },
  ];

  return (
    <div className="support-page">
      <header className="support-header">
        <h1>How can we assist you?</h1>
        <input
          type="text"
          className="support-search"
          placeholder="Search support articles..."
        />
        <p className="support-explore">
          Explore help topics: <span>pricing</span>, <span>offline mode</span>,{' '}
          <span>user profile</span>
        </p>
      </header>

      <section className="support-grid">
        {supportItems.map((item, index) => (
          <div className="support-card" key={index}>
            <FontAwesomeIcon icon={item.icon} className="support-icon" />
            <h3 className="support-card-title">{item.title}</h3>
            <p className="support-card-desc">{item.description}</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default SupportPage;
