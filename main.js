document.addEventListener('DOMContentLoaded', () => {

  // -------------------------
  // Header Scroll Effect
  // -------------------------
  const header = document.querySelector('.header');
  
  const handleScroll = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll, { passive: true });
  handleScroll();

  // -------------------------
  // Mobile Menu
  // -------------------------
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobile-nav');
  const mobileLinks = document.querySelectorAll('.mobile-nav__link');

  if (hamburger && mobileNav) {
    hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('open');
      mobileNav.classList.toggle('open');
      document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
    });

    mobileLinks.forEach(link => {
      link.addEventListener('click', () => {
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        document.body.style.overflow = '';
      });
    });
  }

  // -------------------------
  // Reveal Animations (Intersection Observer)
  // -------------------------
  const observerOptions = {
    root: null,
    rootMargin: '0px 0px -80px 0px',
    threshold: 0.1
  };

  const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
        revealObserver.unobserve(entry.target);
      }
    });
  }, observerOptions);

  document.querySelectorAll('.fade-in').forEach(el => {
    revealObserver.observe(el);
  });

  // -------------------------
  // Smooth scroll for anchor links
  // -------------------------
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const target = this.getAttribute('href');
      if (target === '#') return;
      
      const el = document.querySelector(target);
      if (el) {
        e.preventDefault();
        const headerOffset = parseInt(getComputedStyle(document.documentElement).getPropertyValue('--header-height')) || 80;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset - 20;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });

  // -------------------------
  // Translations System
  // -------------------------
  const translations = {
    pt: {
      nav_home: "Início",
      nav_story: "Sobre",
      nav_products: "Produtos",
      nav_partner: "Seja um parceiro",
      nav_contact: "Contato",
      nav_order: "Peça agora",

      hero_badge: "✦ Receita de família desde sempre",
      hero_t1: "Mais que sabor,",
      hero_t2: "momentos que aquecem o coração",
      hero_desc: "Pão de queijo artesanal feito com amor, receita de família e ingredientes selecionados. O sabor acolhedor da cozinha mineira na sua mesa.",
      hero_btn1: "Peça agora",
      hero_btn2: "Nossa história",
      hero_scroll: "Role para descobrir",

      about_eyebrow: "Nossa História",
      about_title: "Tudo começa na cozinha de casa",
      about_badge: "anos de tradição",
      about_p1: "A Dona Cuca nasceu do amor de uma família mineira pela cozinha. Daquela receita anotada no caderninho da avó, passada de geração em geração, nasceu um pão de queijo que carrega mais do que sabor — carrega memórias, encontros e o aconchego de um abraço quentinho.",
      about_p2: "Cada fornada é preparada com carinho, usando ingredientes selecionados e a mesma dedicação de quando tudo começou: na cozinha pequena, com o cheiro de queijo derretido enchendo a casa inteira.",
      
      val1_title: "Feito com amor",
      val1_desc: "Cada receita carrega o carinho de quem faz para a própria família",
      val2_title: "Ingredientes naturais",
      val2_desc: "Selecionamos os melhores ingredientes para garantir o sabor autêntico",
      val3_title: "Para toda família",
      val3_desc: "Perfeito para reunir as pessoas que você ama ao redor da mesa",

      prod_eyebrow: "Delícias artesanais",
      prod_title: "Nossos Produtos",
      prod_subtitle: "Cada produto é feito com a mesma receita e o mesmo amor de sempre",
      
      p1_name: "Pães de Queijo",
      p1_desc: "O autêntico pão de queijo mineiro com casquinha crocante por fora e macio por dentro. Feito com queijo curado de verdade e aquele sabor que só receita de família tem.",
      
      p2_name: "Biscoitos de Queijo",
      p2_desc: "Crocantes e amanteigados, perfeitos para acompanhar o café da tarde. Um sabor que lembra a casa da avó e derrete na boca.",
      
      p3_name: "Sabores Especiais",
      p3_desc: "Novidades que surpreendem e encantam. Combinações únicas para quem ama experimentar algo novo sem perder o aconchego do caseiro.",
      
      btn_more: "Saiba mais",
      card_hover: "Clique para saber mais",

      gal_eyebrow: "Momentos especiais",
      gal_title: "O sabor que une pessoas",
      gal_1: "Família reunida",
      gal_2: "Feito à mão",
      gal_3: "Receita de avó",
      gal_4: "Café da tarde",
      gal_5: "Sabor caseiro",
      gal_6: "Com carinho",

      contact_eyebrow: "Vamos conversar?",
      contact_title: "Quer sentir esse sabor de perto?",
      contact_desc: "Fale com a gente pelo WhatsApp! Estamos sempre prontos para atender você com o mesmo carinho que colocamos em cada fornada.",
      contact_btn: "Fale com a gente",

      partner_title: "Seja um parceiro da Dona Cuca",
      partner_desc: "Leve o sabor artesanal e o carinho mineiro para o seu estabelecimento. Trabalhamos junto com cafeterias, restaurantes e mercados que valorizam qualidade e tradição.",
      partner_btn: "Quero ser parceiro",

      footer_tagline: "O sabor acolhedor da cozinha mineira na sua mesa.",
      footer_menu1: "Informações",
      footer_link1: "Nossa história",
      footer_link2: "Nossos produtos",
      footer_link3: "Seja um parceiro",
      footer_menu2: "Contato",
      footer_menu3: "Horários",
      footer_love: "Feito com carinho em Minas Gerais"
    },
    en: {
      nav_home: "Home",
      nav_story: "About",
      nav_products: "Products",
      nav_partner: "Partner with us",
      nav_contact: "Contact",
      nav_order: "Order Now",

      hero_badge: "✦ A family recipe since forever",
      hero_t1: "More than flavor,",
      hero_t2: "moments that warm the heart",
      hero_desc: "Artisanal cheese bread made with love, family recipes and selected ingredients. The cozy flavor of Minas Gerais cuisine at your table.",
      hero_btn1: "Order Now",
      hero_btn2: "Our Story",
      hero_scroll: "Scroll to discover",

      about_eyebrow: "Our Story",
      about_title: "It all starts in the home kitchen",
      about_badge: "years of tradition",
      about_p1: "Dona Cuca was born from a Minas Gerais family's love for cooking. From that recipe written in grandma's little notebook, passed from generation to generation, a cheese bread was born that carries more than flavor — it carries memories, gatherings, and the warmth of a cozy embrace.",
      about_p2: "Each batch is prepared with care, using selected ingredients and the same dedication from when it all began: in the small kitchen, with the smell of melted cheese filling the entire house.",
      
      val1_title: "Made with love",
      val1_desc: "Each recipe carries the care of those who make it for their own family",
      val2_title: "Natural ingredients",
      val2_desc: "We select the finest ingredients to ensure authentic flavor",
      val3_title: "For all the family",
      val3_desc: "Perfect for bringing the people you love together around the table",

      prod_eyebrow: "Artisanal delights",
      prod_title: "Our Products",
      prod_subtitle: "Each product is made with the same recipe and the same love as always",
      
      p1_name: "Cheese Breads",
      p1_desc: "The authentic Minas Gerais cheese bread with a crispy crust outside and soft inside. Made with real aged cheese and that flavor only a family recipe has.",
      
      p2_name: "Cheese Biscuits",
      p2_desc: "Crunchy and buttery, perfect to accompany afternoon coffee. A flavor that reminds of grandma's house and melts in your mouth.",
      
      p3_name: "Special Flavors",
      p3_desc: "Novelties that surprise and delight. Unique combinations for those who love trying something new without losing that homemade comfort.",
      
      btn_more: "Learn more",
      card_hover: "Click to learn more",

      gal_eyebrow: "Special moments",
      gal_title: "The flavor that brings people together",
      gal_1: "Family together",
      gal_2: "Handmade",
      gal_3: "Grandma's recipe",
      gal_4: "Afternoon coffee",
      gal_5: "Homemade taste",
      gal_6: "With love",

      contact_eyebrow: "Let's talk?",
      contact_title: "Want to taste this flavor up close?",
      contact_desc: "Talk to us on WhatsApp! We're always ready to serve you with the same care we put into every batch.",
      contact_btn: "Talk to us",

      partner_title: "Partner with Dona Cuca",
      partner_desc: "Bring the artisanal flavor and Minas Gerais warmth to your establishment. We work with cafés, restaurants and markets that value quality and tradition.",
      partner_btn: "I want to be a partner",

      footer_tagline: "The cozy flavor of Minas Gerais cuisine at your table.",
      footer_menu1: "Information",
      footer_link1: "Our story",
      footer_link2: "Our products",
      footer_link3: "Become a partner",
      footer_menu2: "Contact",
      footer_menu3: "Hours",
      footer_love: "Made with care in Minas Gerais"
    },
    es: {
      nav_home: "Inicio",
      nav_story: "Sobre",
      nav_products: "Productos",
      nav_partner: "Sea un socio",
      nav_contact: "Contacto",
      nav_order: "Pídalo ahora",

      hero_badge: "✦ Receta familiar desde siempre",
      hero_t1: "Más que sabor,",
      hero_t2: "momentos que calientan el corazón",
      hero_desc: "Pan de queso artesanal hecho con amor, recetas familiares e ingredientes seleccionados. El sabor acogedor de la cocina de Minas Gerais en su mesa.",
      hero_btn1: "Pídalo ahora",
      hero_btn2: "Nuestra historia",
      hero_scroll: "Desplazar para descubrir",

      about_eyebrow: "Nuestra Historia",
      about_title: "Todo comienza en la cocina del hogar",
      about_badge: "años de tradición",
      about_p1: "Dona Cuca nació del amor de una familia de Minas Gerais por la cocina. De aquella receta anotada en el cuadernito de la abuela, pasada de generación en generación, nació un pan de queso que lleva más que sabor — lleva recuerdos, encuentros y la calidez de un abrazo acogedor.",
      about_p2: "Cada hornada se prepara con cariño, usando ingredientes seleccionados y la misma dedicación de cuando todo comenzó: en la cocina pequeña, con el olor a queso derretido llenando toda la casa.",
      
      val1_title: "Hecho con amor",
      val1_desc: "Cada receta lleva el cariño de quien la hace para su propia familia",
      val2_title: "Ingredientes naturales",
      val2_desc: "Seleccionamos los mejores ingredientes para garantizar el sabor auténtico",
      val3_title: "Para toda la familia",
      val3_desc: "Perfecto para reunir a las personas que amas alrededor de la mesa",

      prod_eyebrow: "Delicias artesanales",
      prod_title: "Nuestros Productos",
      prod_subtitle: "Cada producto está hecho con la misma receta y el mismo amor de siempre",
      
      p1_name: "Panes de Queso",
      p1_desc: "El auténtico pan de queso de Minas Gerais con corteza crujiente por fuera y suave por dentro. Hecho con queso curado real.",
      
      p2_name: "Galletas de Queso",
      p2_desc: "Crujientes y con sabor a mantequilla, perfectas para acompañar el café de la tarde. Un sabor que recuerda la casa de la abuela.",
      
      p3_name: "Sabores Especiales",
      p3_desc: "Novedades que sorprenden y encantan. Combinaciones únicas para quienes aman experimentar algo nuevo sin perder la comodidad casera.",
      
      btn_more: "Más información",
      card_hover: "Haga clic para más detalles",

      gal_eyebrow: "Momentos especiales",
      gal_title: "El sabor que une a las personas",
      gal_1: "Familia reunida",
      gal_2: "Hecho a mano",
      gal_3: "Receta de abuela",
      gal_4: "Café de la tarde",
      gal_5: "Sabor casero",
      gal_6: "Con cariño",

      contact_eyebrow: "¿Hablamos?",
      contact_title: "¿Quieres sentir este sabor de cerca?",
      contact_desc: "¡Háblanos por WhatsApp! Siempre estamos listos para atenderte con el mismo cariño que ponemos en cada hornada.",
      contact_btn: "Habla con nosotros",

      partner_title: "Sea un socio de Dona Cuca",
      partner_desc: "Lleve el sabor artesanal y la calidez de Minas Gerais a su establecimiento. Trabajamos con cafeterías, restaurantes y mercados que valoran calidad y tradición.",
      partner_btn: "Quiero ser socio",

      footer_tagline: "El sabor acogedor de la cocina de Minas Gerais en su mesa.",
      footer_menu1: "Información",
      footer_link1: "Nuestra historia",
      footer_link2: "Nuestros productos",
      footer_link3: "Sea un socio",
      footer_menu2: "Contacto",
      footer_menu3: "Horarios",
      footer_love: "Hecho con cariño en Minas Gerais"
    }
  };

  const currentLangBtn = document.getElementById('current-lang');
  const langOptions = document.querySelectorAll('.lang-option');

  const updateLanguage = (selectedLang) => {
    const langData = translations[selectedLang];
    if (!langData) return;
    
    // Update flag button
    const flags = {
      pt: { src: 'https://flagcdn.com/w20/br.png', alt: 'BR', label: 'PT' },
      en: { src: 'https://flagcdn.com/w20/us.png', alt: 'US', label: 'EN' },
      es: { src: 'https://flagcdn.com/w20/es.png', alt: 'ES', label: 'ES' }
    };
    
    const flag = flags[selectedLang];
    currentLangBtn.innerHTML = `<img src="${flag.src}" alt="${flag.alt}"> ${flag.label} ▾`;
    
    // Apply translations
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (langData[key]) {
        el.textContent = langData[key];
      }
    });

    // Update HTML lang attribute
    document.documentElement.lang = selectedLang === 'pt' ? 'pt-BR' : selectedLang;
  };

  langOptions.forEach(option => {
    option.addEventListener('click', (e) => {
      e.preventDefault();
      updateLanguage(e.currentTarget.getAttribute('data-lang'));
    });
  });

  // Initialize with Portuguese
  updateLanguage('pt');

  // -------------------------
  // Active nav link on scroll
  // -------------------------
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.header__link');

  const highlightNav = () => {
    const scrollPos = window.scrollY + 120;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      
      if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${sectionId}`) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav, { passive: true });

  // -------------------------
  // Parallax effect on hero bg
  // -------------------------
  const heroBg = document.querySelector('.hero__bg-img');
  
  if (heroBg && window.innerWidth > 768) {
    window.addEventListener('scroll', () => {
      const scrolled = window.pageYOffset;
      if (scrolled < window.innerHeight) {
        heroBg.style.transform = `translateY(${scrolled * 0.3}px) scale(1.1)`;
      }
    }, { passive: true });
  }

});
