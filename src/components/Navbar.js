import React from 'react';
import { useTranslation } from 'react-i18next';

const Navbar = () => {
     const { t, i18n } = useTranslation();

   const handleClick = (lang) =>{
     i18n.changeLanguage(lang)
  }
    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="/">Navbar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/para1">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="/para2">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <button onClick={()=>handleClick('en')} className="mr-5">Eng</button>
      <button onClick={()=>handleClick('ar')}>Ara</button>
    </div>
  </div>
</nav>
    );
};

export default Navbar;