import './Nav.css';
import Link from './Link';
import React from 'react';

export default props =>
    <aside className="menu-area">
        <nav className="menu">
            <Link section="home" path="/" title="Início"></Link>
            <Link section="users" path="/users" title="Usuários"></Link>
        </nav>
    </aside>;