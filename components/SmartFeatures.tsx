import React, { useState, useRef } from 'react';
import { BLOG_POSTS, SITE_CONFIG } from '../constants';
import { BlogPost, FormStatus } from '../types';
import { getAIAdvice } from '../services/geminiService';
import { Send, X, Loader2, Sparkles, Download, Check } from 'lucide-react';

// --- AI ADVISOR COMPONENT ---
export const AIAdvisor: React.FC = () => {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleAskAI = async () => {
    if (!question.trim()) return;
    setStatus(FormStatus.LOADING);
    const result = await getAIAdvice(question);
    setAnswer(result);
    setStatus(FormStatus.SUCCESS);
  };

  return (
    <div className="bg-gradient-to-br from-navy-900 to-navy-800 rounded-xl p-8 text-white shadow-xl mt-12">
      <div className="flex items-start gap-4 mb-6">
        <div className="p-3 bg-white/10 rounded-lg">
           <Sparkles className="text-gold-400" size={24} />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">AI Career Assistant</h3>
          <p className="text-slate-300 text-sm mt-1">은퇴 준비, 커리어 트렌드에 대해 궁금한 점을 물어보세요.</p>
        </div>
      </div>

      <div className="space-y-4">
        <textarea
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="예: 은퇴 후 재취업을 위해 가장 먼저 준비해야 할 것은 무엇인가요?"
          className="w-full bg-navy-950/50 border border-navy-700 rounded-lg p-4 text-white placeholder-slate-500 focus:ring-2 focus:ring-gold-500 focus:outline-none resize-none h-24 text-sm"
        />
        <button
          onClick={handleAskAI}
          disabled={status === FormStatus.LOADING || !question}
          className="w-full py-3 bg-gold-600 hover:bg-gold-700 disabled:bg-slate-700 disabled:cursor-not-allowed rounded-lg font-semibold transition-colors flex items-center justify-center gap-2"
        >
          {status === FormStatus.LOADING ? (
            <><Loader2 className="animate-spin" size={18} /> 분석 중...</>
          ) : (
            'AI에게 조언 구하기'
          )}
        </button>

        {answer && (
          <div className="bg-white/10 rounded-lg p-6 mt-6 border border-white/10 animate-fade-in">
            <p className="text-sm leading-relaxed text-slate-100 whitespace-pre-line">{answer}</p>
            <p className="text-xs text-slate-400 mt-4 text-right">* Gemini 2.5 Flash 기반 생성 답변입니다.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// --- BLOG SECTION ---
export const Blog: React.FC = () => {
  return (
    <section id="blog" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-12 text-center">Insights & Trends</h2>
        
        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {BLOG_POSTS.map((post: BlogPost) => (
              <article key={post.id} className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow group cursor-pointer">
                <div className="h-48 overflow-hidden">
                  <img src={post.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between text-xs text-slate-500 mb-3">
                    <span className="font-semibold text-gold-600 uppercase">{post.category}</span>
                    <span>{post.date}</span>
                  </div>
                  <h3 className="font-bold text-lg text-navy-900 mb-3 group-hover:text-blue-700 transition-colors">{post.title}</h3>
                  <p className="text-slate-600 text-sm line-clamp-2">{post.excerpt}</p>
                </div>
              </article>
            ))}
          </div>
          <div className="lg:col-span-1">
             <AIAdvisor />
          </div>
        </div>
      </div>
    </section>
  );
};

// --- CONTACT FORM ---
export const Contact: React.FC = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.LOADING);
    // Simulate API Call
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setFormState({ name: '', email: '', message: '' });
      setTimeout(() => setStatus(FormStatus.IDLE), 3000);
    }, 1500);
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-navy-900 mb-4">Get in Touch</h2>
          <p className="text-slate-600">강의 의뢰, 컨설팅 상담, 혹은 단순한 고민 상담도 환영합니다.</p>
        </div>

        <div className="bg-slate-50 p-8 md:p-12 rounded-2xl shadow-sm border border-slate-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">성함</label>
                <input
                  required
                  type="text"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all"
                  value={formState.name}
                  onChange={(e) => setFormState({...formState, name: e.target.value})}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">이메일</label>
                <input
                  required
                  type="email"
                  className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all"
                  value={formState.email}
                  onChange={(e) => setFormState({...formState, email: e.target.value})}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">문의 내용</label>
              <textarea
                required
                rows={4}
                className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-navy-900 focus:border-transparent outline-none transition-all resize-none"
                value={formState.message}
                onChange={(e) => setFormState({...formState, message: e.target.value})}
              ></textarea>
            </div>
            <div className="flex items-center gap-2">
              <input required type="checkbox" id="privacy" className="rounded text-navy-900 focus:ring-navy-900" />
              <label htmlFor="privacy" className="text-sm text-slate-500">개인정보 수집 및 이용에 동의합니다.</label>
            </div>
            
            <button
              type="submit"
              disabled={status === FormStatus.LOADING || status === FormStatus.SUCCESS}
              className={`w-full py-4 rounded-lg font-bold text-white transition-all flex items-center justify-center gap-2 ${
                status === FormStatus.SUCCESS ? 'bg-green-600' : 'bg-navy-900 hover:bg-navy-800'
              }`}
            >
              {status === FormStatus.LOADING ? (
                <Loader2 className="animate-spin" />
              ) : status === FormStatus.SUCCESS ? (
                <>전송 완료 <Check size={20} /></>
              ) : (
                <>문의하기 <Send size={18} /></>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

// --- LEAD MAGNET MODAL ---
interface LeadMagnetProps {
  isOpen: boolean;
  onClose: () => void;
}

export const LeadMagnet: React.FC<LeadMagnetProps> = ({ isOpen, onClose }) => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<FormStatus>(FormStatus.IDLE);

  if (!isOpen) return null;

  const handleDownload = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus(FormStatus.LOADING);
    setTimeout(() => {
      setStatus(FormStatus.SUCCESS);
      setTimeout(() => {
        onClose();
        setStatus(FormStatus.IDLE);
        setEmail('');
      }, 2000);
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center p-4 bg-navy-900/80 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-md w-full overflow-hidden shadow-2xl relative animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-600">
          <X size={24} />
        </button>
        <div className="bg-navy-900 p-6 text-white text-center">
          <Download className="mx-auto mb-4 text-gold-500" size={40} />
          <h3 className="text-xl font-serif font-bold">무료 가이드북 다운로드</h3>
          <p className="text-slate-300 text-sm mt-2">"퇴직 후 1년, 골든타임을 잡는 법" PDF</p>
        </div>
        <div className="p-8">
          <p className="text-sm text-slate-600 mb-6 text-center leading-relaxed">
            성공적인 인생 2막을 위한 필수 체크리스트가 포함된 20페이지 분량의 가이드북을 이메일로 보내드립니다.
          </p>
          <form onSubmit={handleDownload} className="space-y-4">
            <input
              type="email"
              required
              placeholder="이메일 주소를 입력해주세요"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-navy-900 outline-none"
            />
            <button
              type="submit"
              disabled={status === FormStatus.LOADING || status === FormStatus.SUCCESS}
              className={`w-full py-3 rounded-lg font-bold text-white transition-all ${
                status === FormStatus.SUCCESS ? 'bg-green-600' : 'bg-gold-600 hover:bg-gold-700'
              }`}
            >
               {status === FormStatus.LOADING ? '처리 중...' : status === FormStatus.SUCCESS ? '발송되었습니다!' : '무료로 받기'}
            </button>
          </form>
          <p className="text-xs text-slate-400 mt-4 text-center">
            뉴스레터 구독 동의가 포함됩니다. 언제든 구독 취소 가능합니다.
          </p>
        </div>
      </div>
    </div>
  );
};
