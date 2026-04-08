import React from 'react';
import { 
  BookOpen, 
  Library, 
  BarChart3, 
  Network, 
  UserCircle, 
  Plus,
  Share2,
  Globe,
  ArrowRight
} from 'lucide-react';
import './Layout.css';

export default function Layout({ children, currentScreen, onNavigate }) {
  return (
    <div className="layout-root">
      {/* TopAppBar */}
      <header className="top-app-bar glass-panel">
        <div className="header-left">
          <div 
            className="brand-logo text-glow-primary cursor-pointer"
            onClick={() => onNavigate('landing')}
          >
            StoryForge
          </div>
          <nav className="header-nav hidden-mobile">
            <a className="nav-link cursor-pointer">Fantasy</a>
            <a className="nav-link cursor-pointer">Action</a>
            <a className="nav-link cursor-pointer">Apocalypse</a>
            <a className="nav-link cursor-pointer">Romance</a>
          </nav>
        </div>
        <div className="header-right gap-4">
          <button className="primary-btn">
            Create Story
          </button>
          <div 
            className="user-profile-icon cursor-pointer"
            onClick={() => onNavigate('identity')}
          >
            <UserCircle size={32} />
          </div>
        </div>
      </header>

      {/* SideNavBar Perspective Rail */}
      <aside className="side-nav-bar glass-panel">
        <div className="profile-container click-target" onClick={() => onNavigate('identity')}>
          <div className="profile-image-wrapper">
            <img 
              className="profile-img" 
              src="https://picsum.photos/seed/architect/100/100" 
              alt="Profile"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
        <div className="nav-items-container flex flex-col items-center">
          <NavItem 
            icon={<BookOpen size={24} />} 
            label="Home" 
            active={currentScreen === 'landing'} 
            onClick={() => onNavigate('landing')}
          />
          <NavItem 
            icon={<Library size={24} />} 
            label="Library" 
            active={currentScreen === 'genre-selection'} 
            onClick={() => onNavigate('genre-selection')}
          />
          <NavItem 
            icon={<BarChart3 size={24} />} 
            label="Stats" 
            active={false} 
          />
          <NavItem 
            icon={<Network size={24} />} 
            label="Nexus" 
            active={currentScreen === 'community-hub'} 
            onClick={() => onNavigate('community-hub')}
          />
        </div>
      </aside>

      <main className="main-content min-h-screen">
        {children}
      </main>

      {/* Footer */}
      <footer className="footer-container relative w-full">
        <div className="footer-content max-w-7xl mx-auto flex flex-col justify-between items-center gap-8">
          <div className="flex flex-col gap-2">
            <div className="footer-brand text-glow-primary">StoryForge</div>
            <p className="footer-copy">© 2024 StoryForge AI. Forge your own destiny.</p>
          </div>
          <div className="footer-links flex gap-12">
            <div className="flex flex-col gap-3">
              <span className="footer-link-header uppercase">Ecosystem</span>
              <a className="footer-link cursor-pointer">Lore</a>
              <a className="footer-link cursor-pointer">Architects</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="footer-link-header uppercase">Protocols</span>
              <a className="footer-link cursor-pointer">Terms</a>
              <a className="footer-link cursor-pointer">Privacy</a>
            </div>
          </div>
          <div className="footer-socials flex gap-4">
            <button className="social-btn transition-colors">
              <Share2 size={20} />
            </button>
            <button className="social-btn transition-colors">
              <Globe size={20} />
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }) {
  return (
    <div 
      className={`nav-item flex flex-col items-center gap-1 cursor-pointer transition-all ${
        active ? 'active' : 'inactive'
      }`}
      onClick={onClick}
    >
      {icon}
      <span className="nav-label uppercase tracking-widest">{label}</span>
    </div>
  );
}
