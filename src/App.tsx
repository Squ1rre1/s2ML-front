import { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX, FiArrowRight, FiCheck, FiStar } from 'react-icons/fi'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const features = [
    { title: '빠른 성능', description: 'Vite 기반의 초고속 개발 환경' },
    { title: '현대적 디자인', description: 'Tailwind CSS로 구현한 세련된 UI' },
    { title: '반응형 레이아웃', description: '모든 디바이스에서 완벽하게 작동' },
    { title: '애니메이션', description: 'Framer Motion으로 부드러운 인터랙션' }
  ]

  const testimonials = [
    { name: '김철수', role: 'CEO', content: '정말 놀라운 서비스입니다. 강력 추천합니다!' },
    { name: '이영희', role: '디자이너', content: 'UI/UX가 정말 직관적이고 사용하기 편해요.' },
    { name: '박민수', role: '개발자', content: '개발 경험이 훌륭합니다. 생산성이 크게 향상되었어요.' }
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white">
      {/* 네비게이션 */}
      <nav className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <span className="text-2xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                S2ML
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:text-violet-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">홈</a>
                <a href="#features" className="hover:text-violet-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">기능</a>
                <a href="#testimonials" className="hover:text-violet-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">후기</a>
                <a href="#contact" className="hover:text-violet-400 px-3 py-2 rounded-md text-sm font-medium transition-colors">연락처</a>
              </div>
            </div>
            
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-violet-400 hover:bg-white/10 focus:outline-none"
              >
                {isMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/20 backdrop-blur-md">
              <a href="#home" className="hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium">홈</a>
              <a href="#features" className="hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium">기능</a>
              <a href="#testimonials" className="hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium">후기</a>
              <a href="#contact" className="hover:text-violet-400 block px-3 py-2 rounded-md text-base font-medium">연락처</a>
            </div>
          </motion.div>
        )}
      </nav>

      {/* 히어로 섹션 */}
      <section id="home" className="pt-16 min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">
                미래를 만나보세요
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              최신 기술로 구축된 혁신적인 웹 애플리케이션을 경험하세요. 
              React, TypeScript, Tailwind CSS로 만들어진 완벽한 솔루션입니다.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all"
              >
                시작하기 <FiArrowRight />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-violet-400 hover:bg-violet-400/10 px-8 py-3 rounded-full font-semibold transition-all"
              >
                더 알아보기
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 기능 섹션 */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">주요 기능</h2>
            <p className="text-xl text-gray-300">우리가 제공하는 놀라운 기능들을 확인해보세요</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6 hover:bg-white/20 transition-all"
              >
                <div className="bg-gradient-to-r from-violet-600 to-purple-600 w-12 h-12 rounded-lg flex items-center justify-center mb-4">
                  <FiCheck className="text-white text-xl" />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 후기 섹션 */}
      <section id="testimonials" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">고객 후기</h2>
            <p className="text-xl text-gray-300">우리 서비스를 사용한 고객들의 생생한 후기</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/10 backdrop-blur-md rounded-xl p-6"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <FiStar key={i} className="text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-300 mb-4">"{testimonial.content}"</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-gray-400">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 연락처 섹션 */}
      <section id="contact" className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4">함께 시작해요</h2>
            <p className="text-xl text-gray-300 mb-8">궁금한 점이 있으시면 언제든지 연락주세요</p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold flex items-center justify-center gap-2 transition-all mx-auto"
            >
              문의하기 <FiArrowRight />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* 푸터 */}
      <footer className="bg-black/20 backdrop-blur-md py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-gray-400">© 2024 S2ML. All rights reserved.</p>
        </div>
      </footer>
    </div>
  )
}

export default App
