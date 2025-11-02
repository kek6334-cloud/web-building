import { useState } from 'react';
import { TrendingUp, Search, BarChart3, Bell, Newspaper, PieChart, Calculator, Star, Menu, X, Sun, Moon, ChevronRight, Filter, Activity } from 'lucide-react';

export default function Home() {
  const [isDark, setIsDark] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [watchlist, setWatchlist] = useState(['2330.TW', 'AAPL', 'TSLA']);

  const bgColor = isDark ? 'bg-gray-900' : 'bg-gray-50';
  const cardBg = isDark ? 'bg-gray-800' : 'bg-white';
  const textColor = isDark ? 'text-gray-100' : 'text-gray-900';
  const textSecondary = isDark ? 'text-gray-400' : 'text-gray-600';
  const borderColor = isDark ? 'border-gray-700' : 'border-gray-200';

  // 模擬數據
  const marketIndices = [
    { name: '台灣加權', value: '17,234.56', change: '+1.24%', isUp: true },
    { name: 'S&P 500', value: '4,567.89', change: '-0.35%', isUp: false },
    { name: '那斯達克', value: '14,123.45', change: '+0.87%', isUp: true },
    { name: '日經225', value: '32,456.78', change: '+0.52%', isUp: true }
  ];

  const hotStocks = [
    { symbol: '2330.TW', name: '台積電', price: '585.00', change: '+2.45%', volume: '42,567K' },
    { symbol: '2317.TW', name: '鴻海', price: '108.50', change: '+1.87%', volume: '89,234K' },
    { symbol: 'NVDA', name: '輝達', price: '495.20', change: '+3.24%', volume: '156,789K' },
    { symbol: 'AAPL', name: '蘋果', price: '178.30', change: '-0.45%', volume: '67,890K' }
  ];

  const features = [
    { icon: Filter, title: '智能篩選器', desc: '多維度篩選最適合的投資標的' },
    { icon: BarChart3, title: '技術分析', desc: '專業圖表工具與技術指標' },
    { icon: Calculator, title: '財務數據', desc: '完整財報與財務比率分析' },
    { icon: Bell, title: '即時警示', desc: '價格與新聞即時通知' },
    { icon: Newspaper, title: '市場新聞', desc: '聚合全球財經資訊' },
    { icon: PieChart, title: '投資組合', desc: '追蹤與管理您的持股' }
  ];

  const news = [
    { title: '台積電公布Q4財報 獲利優於預期', time: '2小時前', source: '經濟日報' },
    { title: '美聯儲維持利率不變 市場反應正面', time: '5小時前', source: 'Bloomberg' },
    { title: 'AI晶片需求激增 相關概念股走強', time: '8小時前', source: '工商時報' }
  ];

  return (
    <div className={`min-h-screen ${bgColor} ${textColor} transition-colors duration-300`}>
      {/* Header */}
      <header className={`${cardBg} border-b ${borderColor} sticky top-0 z-50`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent">
                Base44
              </span>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="hover:text-blue-500 transition-colors">市場</a>
              <a href="#" className="hover:text-blue-500 transition-colors">篩選器</a>
              <a href="#" className="hover:text-blue-500 transition-colors">分析工具</a>
              <a href="#" className="hover:text-blue-500 transition-colors">新聞</a>
              <a href="#" className="hover:text-blue-500 transition-colors">教學</a>
            </nav>

            <div className="flex items-center space-x-4">
              <button
                onClick={() => setIsDark(!isDark)}
                className={`p-2 rounded-lg ${cardBg} hover:bg-opacity-80 transition-all`}
              >
                {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <button className="hidden md:block px-6 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all">
                立即開始
              </button>
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="md:hidden p-2"
              >
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-gray-700 py-4 px-4">
            <nav className="flex flex-col space-y-3">
              <a href="#" className="hover:text-blue-500 transition-colors">市場</a>
              <a href="#" className="hover:text-blue-500 transition-colors">篩選器</a>
              <a href="#" className="hover:text-blue-500 transition-colors">分析工具</a>
              <a href="#" className="hover:text-blue-500 transition-colors">新聞</a>
              <a href="#" className="hover:text-blue-500 transition-colors">教學</a>
            </nav>
          </div>
        )}
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center py-12 md:py-20">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            智慧投資，從數據開始
          </h1>
          <p className={`text-lg md:text-xl ${textSecondary} mb-8 max-w-2xl mx-auto`}>
            專業級股票分析平台，整合即時行情、財務數據、技術分析與AI預測，助您做出明智投資決策
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
              免費註冊 <ChevronRight className="inline w-5 h-5 ml-1" />
            </button>
            <button className={`px-8 py-4 ${cardBg} border-2 ${borderColor} rounded-lg text-lg font-semibold hover:border-blue-500 transition-all`}>
              觀看示範
            </button>
          </div>
        </section>

        {/* Search Bar */}
        <div className={`${cardBg} rounded-xl p-4 mb-8 border ${borderColor}`}>
          <div className="flex items-center gap-3">
            <Search className={`w-5 h-5 ${textSecondary}`} />
            <input
              type="text"
              placeholder="搜尋股票代碼、公司名稱或關鍵字..."
              className={`flex-1 bg-transparent outline-none ${textColor}`}
            />
            <button className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
              搜尋
            </button>
          </div>
        </div>

        {/* Market Indices */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Activity className="w-6 h-6 text-blue-500" />
            即時行情
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {marketIndices.map((index, i) => (
              <div key={i} className={`${cardBg} rounded-xl p-6 border ${borderColor} hover:border-blue-500 transition-all cursor-pointer`}>
                <div className={`text-sm ${textSecondary} mb-1`}>{index.name}</div>
                <div className="text-2xl font-bold mb-2">{index.value}</div>
                <div className={`text-sm font-semibold ${index.isUp ? 'text-green-500' : 'text-red-500'}`}>
                  {index.change}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Features Grid */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-blue-500" />
            核心功能
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, i) => (
              <div key={i} className={`${cardBg} rounded-xl p-6 border ${borderColor} hover:border-blue-500 transition-all group cursor-pointer`}>
                <feature.icon className="w-10 h-10 text-blue-500 mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className={textSecondary}>{feature.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Hot Stocks & News */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
          {/* Hot Stocks */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                熱門股票
              </h2>
              <button className="text-blue-500 hover:underline text-sm">查看更多</button>
            </div>
            <div className={`${cardBg} rounded-xl border ${borderColor} overflow-hidden`}>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className={`${isDark ? 'bg-gray-700' : 'bg-gray-100'}`}>
                    <tr>
                      <th className="text-left p-4 text-sm font-semibold">代碼</th>
                      <th className="text-left p-4 text-sm font-semibold">名稱</th>
                      <th className="text-right p-4 text-sm font-semibold">價格</th>
                      <th className="text-right p-4 text-sm font-semibold">漲跌幅</th>
                      <th className="text-right p-4 text-sm font-semibold">成交量</th>
                    </tr>
                  </thead>
                  <tbody>
                    {hotStocks.map((stock, i) => (
                      <tr key={i} className={`border-t ${borderColor} hover:bg-opacity-50 hover:bg-blue-500 transition-colors cursor-pointer`}>
                        <td className="p-4 font-mono text-sm">{stock.symbol}</td>
                        <td className="p-4">{stock.name}</td>
                        <td className="p-4 text-right font-semibold">${stock.price}</td>
                        <td className={`p-4 text-right font-semibold ${stock.change.startsWith('+') ? 'text-green-500' : 'text-red-500'}`}>
                          {stock.change}
                        </td>
                        <td className={`p-4 text-right text-sm ${textSecondary}`}>{stock.volume}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* News */}
          <div>
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Newspaper className="w-6 h-6 text-blue-500" />
              市場新聞
            </h2>
            <div className="space-y-4">
              {news.map((item, i) => (
                <div key={i} className={`${cardBg} rounded-xl p-4 border ${borderColor} hover:border-blue-500 transition-all cursor-pointer`}>
                  <h3 className="font-semibold mb-2 hover:text-blue-500 transition-colors">{item.title}</h3>
                  <div className={`flex items-center gap-3 text-xs ${textSecondary}`}>
                    <span>{item.source}</span>
                    <span>•</span>
                    <span>{item.time}</span>
                  </div>
                </div>
              ))}
              <button className="w-full py-3 text-blue-500 hover:underline text-sm font-semibold">
                查看所有新聞
              </button>
            </div>
          </div>
        </div>

        {/* Watchlist */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
            <Star className="w-6 h-6 text-blue-500" />
            我的關注清單
          </h2>
          <div className={`${cardBg} rounded-xl p-6 border ${borderColor}`}>
            <div className="flex flex-wrap gap-3 mb-4">
              {watchlist.map((symbol, i) => (
                <div key={i} className="px-4 py-2 bg-blue-500 bg-opacity-20 text-blue-500 rounded-lg font-mono text-sm">
                  {symbol}
                </div>
              ))}
              <button className="px-4 py-2 border-2 border-dashed border-gray-500 rounded-lg hover:border-blue-500 transition-colors text-sm">
                + 新增股票
              </button>
            </div>
            <p className={`text-sm ${textSecondary}`}>
              登入以同步您的關注清單並獲得即時提醒
            </p>
          </div>
        </section>

        {/* CTA Section */}
        <section className={`${cardBg} rounded-2xl p-8 md:p-12 border ${borderColor} text-center bg-gradient-to-br from-blue-500 to-purple-600 bg-opacity-10`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">準備開始您的投資旅程？</h2>
          <p className={`text-lg ${textSecondary} mb-8 max-w-2xl mx-auto`}>
            加入數萬名投資者，使用Base44強大的分析工具，讓數據為您的投資決策保駕護航
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg text-lg font-semibold hover:shadow-xl transition-all">
              免費註冊
            </button>
            <button className={`px-8 py-4 ${cardBg} border-2 ${borderColor} rounded-lg text-lg font-semibold hover:border-blue-500 transition-all`}>
              了解更多
            </button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className={`${cardBg} border-t ${borderColor} mt-20`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                  <TrendingUp className="w-6 h-6 text-white" />
                </div>
                <span className="text-xl font-bold">Base44</span>
              </div>
              <p className={`text-sm ${textSecondary}`}>
                專業股票分析平台，讓投資更簡單
              </p>
            </div>
            <div>
              <h3 className="font-bold mb-4">產品</h3>
              <ul className={`space-y-2 text-sm ${textSecondary}`}>
                <li><a href="#" className="hover:text-blue-500 transition-colors">股票篩選器</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">技術分析</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">財務數據</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">市場新聞</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">資源</h3>
              <ul className={`space-y-2 text-sm ${textSecondary}`}>
                <li><a href="#" className="hover:text-blue-500 transition-colors">新手教學</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">API文件</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">部落格</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">常見問題</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-bold mb-4">公司</h3>
              <ul className={`space-y-2 text-sm ${textSecondary}`}>
                <li><a href="#" className="hover:text-blue-500 transition-colors">關於我們</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">聯絡我們</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">隱私政策</a></li>
                <li><a href="#" className="hover:text-blue-500 transition-colors">服務條款</a></li>
              </ul>
            </div>
          </div>
          <div className={`border-t ${borderColor} pt-8 text-center text-sm ${textSecondary}`}>
            <p>© 2025 Base44. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}