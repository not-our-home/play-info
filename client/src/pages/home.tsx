import { Button } from "@/components/ui/button";
import posterImage from "@assets/POSTER_1753552322790.jpg";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-lg z-50 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold" style={{ color: 'var(--theater-red)' }}>
              NOT OUR HOME
            </div>
            <div className="flex space-x-1 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('donate')}
                className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
              >
                Donate
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('cast')}
                className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
              >
                Cast & Crew
              </button>
              <button 
                onClick={() => scrollToSection('playwright')}
                className="px-2 sm:px-4 py-2 text-sm font-medium text-gray-700 hover:text-red-600 transition-colors"
              >
                Playwright
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Home/Hero */}
      <section id="home" className="section-height theater-red flex flex-col">
        {/* Poster at very top */}
        <div className="flex-shrink-0 pt-20 pb-4 flex justify-center">
          <img 
            src={posterImage} 
            alt="Not Our Home, Not Our Home - Theater Poster"
            className="h-96 object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Main content - centered */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-8">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
            NOT OUR HOME,<br/>NOT OUR HOME
          </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-4 font-medium">A new play by Ned Du</p>
          
          <div className="text-white/80 mb-8 max-w-2xl space-y-3">
            <p className="text-base sm:text-lg"><strong>Preview performance:</strong> August 9, 7:30 PM @ The Flea Theater</p>
            <p className="text-sm sm:text-base">(Presented by Rogue Theater Festival 2025)</p>
            <p className="text-base sm:text-lg"><strong>Main performance week:</strong> September 22–28 @ The Theater for the New City</p>
            <p className="text-sm sm:text-base">(Full schedule & ticket info coming soon)</p>
          </div>
        </div>


      </section>

      {/* Section 2: Donate */}
      <section id="donate" className="section-height theater-beige py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-8">DONATE</h2>
          
          <div className="max-w-2xl mx-auto mb-12">
            <p className="text-xl text-gray-700 leading-relaxed mb-8">
              Help Us Build the September Show and Beyond.
            </p>
            <p className="text-lg text-gray-700 mb-8">
              Your donation supports artists and production costs. Thank you!
            </p>
          </div>
          
          <div className="mb-8">
            <Button 
              onClick={() => window.open('#', '_blank')}
              className="bg-red-600 text-white px-12 py-4 rounded-lg text-xl font-bold hover:bg-red-700 transition-colors shadow-lg"
            >
              DONATE NOW
            </Button>
          </div>
        </div>
      </section>

      {/* Section 3: About the Play */}
      <section id="about" className="section-height bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">ABOUT THE PLAY</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <p className="text-lg leading-relaxed">
              In this surreal drama-comedy, two Taiwanese-American brothers return to Taipei for Chinese New Year, carrying baggage both literal and emotional—including the ashes of a childhood cat. Set against political tension and ancestral ritual, Not Our Home, Not Our Home explores the costs of immigration, the ache of cultural dissonance, and the ghosts we carry across generations. Laced with dark humor, horror elements, and underscored by a lush original score, this play blurs the line between memory and myth, asking: What do we owe the places we leave behind—and the people we become?
            </p>
          </div>
        </div>
      </section>

      {/* Section 4: Cast & Crew */}
      <section id="cast" className="section-height theater-gray py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">CAST & CREW</h2>
          
          <div className="flex-1">
            {/* Cast Section */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-white text-center mb-8">CAST</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Headshot</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Josh Lau</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – YOUNGEST</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Headshot</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Ding Lee</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – MIDDLE</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Headshot</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">John Jiang</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – ELDEST</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Headshot</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Dominic Wong</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – UNCLE</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Headshot</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Lei Chow</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – FATHER</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Headshot</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Tien-Li Wu</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – GRANDMOTHER</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Headshot</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Boyu Chen</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – COUSIN / MASKED MAN / FLIGHT ATTENDANT / PASSPORT OFFICER / RADIO</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>
              </div>
            </div>

            {/* Crew Section */}
            <div>
              <h3 className="text-2xl font-bold text-white text-center mb-8">CREW</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Photo</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Ned Du</h4>
                  <p className="text-white/80 text-sm mb-3">WRITER and PRODUCER</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Photo</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Sissi Chen</h4>
                  <p className="text-white/80 text-sm mb-3">DIRECTOR</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Photo</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Daphne Lin</h4>
                  <p className="text-white/80 text-sm mb-3">STAGE MANAGER</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Photo</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Yung-Hung Sung</h4>
                  <p className="text-white/80 text-sm mb-3">LIGHTING DESIGNER</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Photo</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Mamie Limbrick</h4>
                  <p className="text-white/80 text-sm mb-3">COMPOSER and SOUND DESIGNER</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>

                <div className="text-center bg-white/10 rounded-lg p-6">
                  <div className="cast-placeholder aspect-square rounded-lg mb-4 mx-auto max-w-32 flex items-center justify-center">
                    <span className="text-gray-500 text-xs">Photo</span>
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Qingan Zhang</h4>
                  <p className="text-white/80 text-sm mb-3">SCENIC DESIGNER</p>
                  <p className="text-white/70 text-xs leading-relaxed">
                    Bio coming soon
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Playwright's Note */}
      <section id="playwright" className="section-height theater-beige py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 text-center mb-8">PLAYWRIGHT'S NOTE</h2>
          
          <div className="prose prose-lg max-w-none text-gray-700 space-y-6">
            <div className="bg-white/50 p-8 rounded-lg">
              <p className="text-lg leading-relaxed italic text-center">
                "This play emerged from my own experience navigating identity between cultures, and the realization that 'home' isn't always a place you can return to—sometimes it's something you have to create. Through the journey of these two brothers, I hope audiences will reflect on their own relationships with belonging, memory, and the stories we tell ourselves about who we are."
              </p>
              <p className="text-right mt-6 font-semibold">— Ned Du</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="text-white space-y-4">
            <p className="text-lg">Contact: <a href="mailto:rexlee22786@gmail.com" className="text-white underline hover:text-white/80 transition-colors">rexlee22786@gmail.com</a></p>
            <div className="pt-4 border-t border-white/20">
              <p className="text-white/60 text-sm">
                © 2025 NOT OUR HOME, NOT OUR HOME • A play by Ned Du
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
