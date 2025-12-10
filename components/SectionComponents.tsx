import React from 'react';
import { ArrowRight, CheckCircle, Download } from 'lucide-react';
import { SITE_CONFIG, SERVICES, TESTIMONIALS, HISTORY } from '../constants';
import { ServiceItem, Testimonial, HistoryItem } from '../types';

// --- HERO SECTION ---
export const Hero: React.FC<{ onOpenLeadMagnet: () => void }> = ({ onOpenLeadMagnet }) => {
  const handleScrollToContact = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-50">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-slate-100 transform skew-x-[-12deg] translate-x-20 z-0" />
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-3xl">
          <span className="inline-block py-1 px-3 bg-blue-100 text-blue-800 rounded-full text-sm font-semibold mb-6 tracking-wide">
            Retirement & Executive Career Transition
          </span>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-navy-900 leading-tight mb-6">
            {SITE_CONFIG.slogan}
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 font-light">
            {SITE_CONFIG.subSlogan}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              onClick={handleScrollToContact}
              className="px-8 py-4 bg-navy-900 text-white rounded-lg font-semibold hover:bg-navy-800 transition-all shadow-lg text-center flex items-center justify-center gap-2 cursor-pointer"
            >
              상담 문의하기 <ArrowRight size={18} />
            </a>
            <button 
              onClick={onOpenLeadMagnet}
              className="px-8 py-4 bg-white text-navy-900 border border-slate-300 rounded-lg font-semibold hover:bg-slate-50 transition-all shadow-sm text-center flex items-center justify-center gap-2"
            >
              <Download size={18} /> 무료 가이드북 받기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- ABOUT SECTION ---
export const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="w-full md:w-1/2 relative">
            <div className="aspect-[4/5] bg-slate-200 rounded-lg overflow-hidden shadow-xl relative z-10">
               <img src="https://picsum.photos/600/800?grayscale" alt="Consultant Portrait" className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gold-500 rounded-lg z-0 hidden md:block" />
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-6">Who I Am</h2>
            <h3 className="text-xl text-gold-600 font-medium mb-4">커리어 컨설턴트 {SITE_CONFIG.name}</h3>
            <p className="text-slate-600 leading-relaxed mb-6">
              25년간의 대기업 인사 담당 임원 경력과 10년의 커리어 컨설팅 노하우를 바탕으로, 
              은퇴를 앞둔 분들의 막막함을 희망찬 계획으로 바꿔드립니다.
            </p>
            <p className="text-slate-600 leading-relaxed mb-8">
              단순한 재취업 알선이 아닙니다. 지난 삶의 궤적을 정리하고, 
              앞으로의 삶의 가치를 재발견하는 진정한 '인생 2막' 파트너가 되어드리겠습니다.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold-600" size={20} />
                <span className="font-medium text-slate-700">전문 코치 자격 보유</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold-600" size={20} />
                <span className="font-medium text-slate-700">3,000+ 상담 사례</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold-600" size={20} />
                <span className="font-medium text-slate-700">대기업 출신 인사통</span>
              </div>
              <div className="flex items-center gap-3">
                <CheckCircle className="text-gold-600" size={20} />
                <span className="font-medium text-slate-700">실전 위주 솔루션</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// --- SERVICES SECTION ---
export const Services: React.FC = () => {
  return (
    <section id="services" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Services</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            개인 고객부터 기업 고객까지, 대상과 목적에 최적화된 전문 컨설팅 프로그램을 제공합니다.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {SERVICES.map((service: ServiceItem) => (
            <div key={service.id} className="bg-white p-8 rounded-xl shadow-md hover:shadow-xl transition-shadow border-t-4 border-navy-900 group">
              <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center text-navy-900 mb-6 group-hover:bg-navy-900 group-hover:text-white transition-colors">
                <service.icon size={24} />
              </div>
              <h3 className="text-xl font-bold text-navy-900 mb-3">{service.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-4 min-h-[80px]">
                {service.description}
              </p>
              <div className="text-xs font-semibold text-gold-600 bg-gold-50 inline-block px-3 py-1 rounded-full">
                대상: {service.targetAudience}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- HISTORY SECTION ---
export const History: React.FC = () => {
  return (
    <section id="history" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-12 text-center">Track Record</h2>
        <div className="max-w-4xl mx-auto space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
          {HISTORY.map((item: HistoryItem, index) => (
            <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-gold-500 text-slate-500 group-[.is-active]:text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                <div className="text-xs font-bold">{item.year}</div>
              </div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 bg-white rounded-lg border border-slate-100 shadow-sm">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-bold text-navy-900">{item.title}</h3>
                  <span className="text-xs font-semibold px-2 py-1 bg-slate-100 text-slate-600 rounded">{item.type}</span>
                </div>
                <p className="text-slate-600 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// --- TESTIMONIALS SECTION ---
export const Testimonials: React.FC = () => {
  return (
    <section className="py-20 bg-navy-900 text-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">Client Stories</h2>
          <p className="text-slate-400">함께 새로운 시작을 만든 분들의 이야기입니다.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t: Testimonial) => (
            <div key={t.id} className="bg-navy-800 p-8 rounded-lg relative">
              <div className="flex items-center mb-6">
                <img src={t.avatar} alt={t.name} className="w-12 h-12 rounded-full mr-4 border-2 border-gold-500" />
                <div>
                  <h4 className="font-bold text-white">{t.name}</h4>
                  <p className="text-xs text-slate-400">{t.role}, {t.company}</p>
                </div>
              </div>
              <p className="text-slate-300 text-sm leading-relaxed italic">"{t.content}"</p>
              <div className="absolute top-4 right-6 text-6xl text-navy-700 opacity-50 font-serif">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};