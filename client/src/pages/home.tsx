import { Button } from "@/components/ui/button";
import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// Component to handle truncated bios with expand/collapse functionality
function TruncatedBio({ children }: { children: string }) {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const words = children.split(' ');
  const shouldTruncate = words.length > 120;
  const displayText = shouldTruncate && !isExpanded 
    ? words.slice(0, 120).join(' ') + '...'
    : children;

  return (
    <div className="text-white/70 text-xs leading-relaxed">
      <p>{displayText}</p>
      {shouldTruncate && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-white/90 hover:text-white text-xs underline mt-2 transition-colors"
        >
          {isExpanded ? 'Read less' : 'Read more'}
        </button>
      )}
    </div>
  );
}

export default function Home() {
  // Get the base path from Vite's configuration
  const basePath = import.meta.env.BASE_URL;
  const posterImageSrc = basePath + 'POSTER_1753552322790.jpg';

  // Gallery state
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  // List of all rehearsal photos
  const galleryImages = [
    'IMG_3362.jpg',
    'fxn 2025-07-21 150441.244.jpg',
    'fxn 2025-07-21 150528.947.jpg',
    'fxn 2025-07-21 133702.815.jpg',
    'fxn 2025-07-21 133559.825.jpg',
    'fxn 2025-07-21 133853.229.jpg',
    'fxn 2025-07-21 133215.030.jpg',
    'fxn 2025-07-21 134138.264.jpg',
    'fxn 2025-07-05 195505.142.jpg',
    'fxn 2025-07-05 195445.262.jpg',
    'fxn 2025-07-18 165713.890.jpg',
    'fxn 2025-07-18 165945.824.jpg',
    'fxn 2025-07-09 142044.190.jpg',
    'fxn 2025-07-13 164236.529.jpg',
    'fxn 2025-07-15 144019.316.jpg',
    'fxn 2025-07-09 142105.895.jpg',
    'fxn 2025-07-13 163108.077.jpg',
    'fxn 2025-07-11 190934.422.jpg',
    'fxn 2025-07-11 190531.293.jpg',
    'fxn 2025-07-09 142132.851.jpg',
    'fxn 2025-07-14 151754.693.jpg',
    'fxn 2025-07-11 185920.791.jpg',
    'fxn 2025-07-12 175424.524.jpg',
    'fxn 2025-07-15 162332.126.jpg',
    'fxn 2025-07-11 201935.628.jpg',
    'fxn 2025-07-12 175402.185.jpg',
    'fxn 2025-07-09 142736.632.jpg',
    'fxn 2025-07-09 142755.819.jpg',
    'fxn 2025-07-09 142157.687.jpg',
    'fxn 2025-07-11 202528.864.jpg',
    'fxn 2025-07-11 190237.387.jpg',
    'fxn 2025-07-11 190347.694.jpg',
    'fxn 2025-07-11 190549.081.jpg',
    'meggiehoolphoto-redthreads-01.jpg',
    'meggiehoolphoto-redthreads-05.jpg',
    'meggiehoolphoto-redthreads-10.jpg',
    'meggiehoolphoto-redthreads-143.jpg',
    'meggiehoolphoto-redthreads-20.jpg',
    'meggiehoolphoto-redthreads-45.jpg',
    'meggiehoolphoto-redthreads-59.jpg',
    'meggiehoolphoto-redthreads-79.jpg'
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const previousImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  // Function to get headshot path for each person
  const getHeadshotPath = (name: string): string | null => {
    const headshotMap: { [key: string]: string } = {
      'Josh Lau': 'Josh Lau.jpg',
      'Ding Lee': 'Ding J_s Headshot.jpg',
      'John Jiang': 'John Jiang.jpg',
      'Dominic Wong': 'Dominic Wong - Headshot 20250512.jpg',
      'Lei Chow': 'Lei Chow.jpg',
      'Tien-Li Wu': 'Tien-Li Wu.jpg',
      'Boyu Chen': 'Boyu Chen.jpg',
      'Ned Du': 'Ned Du.webp',
      'Sissi Chen': 'Sissi Chen.jpg',
      'Daphne Lin': 'Daphne Lin.jpg',
      'Yung-Hung Sung': 'Yung-Hung Sung.jpg',
      'Mamie Limbrick': 'Mamie Limbrick.jpg',
      'Qingan Zhang': 'QinganZhang.jpg',
    };
    
    return headshotMap[name] ? basePath + headshotMap[name] : null;
  };

  // Component to render headshot or placeholder
  const HeadshotImage = ({ name, alt }: { name: string; alt: string }) => {
    const headshotPath = getHeadshotPath(name);
    
    if (headshotPath) {
      return (
        <img 
          src={headshotPath}
          alt={alt}
          className="w-full h-full object-cover"
        />
      );
    } else {
      return (
        <div className="w-full h-full bg-white/20 flex items-center justify-center">
          <span className="text-gray-500 text-xs">Photo</span>
        </div>
      );
    }
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Navigation Header */}
      <nav className="fixed top-0 left-0 right-0 bg-black/95 backdrop-blur-sm shadow-2xl z-50 border-b border-red-900/50">
        <div className="max-w-6xl mx-auto px-2 sm:px-4 lg:px-8">
          <div className="flex justify-between items-center h-20 sm:h-16">
            <div className="text-sm sm:text-xl font-bold italic leading-tight" style={{ color: 'var(--theater-red)' }}>
              NOT OUR HOME, NOT OUR HOME
            </div>
            <div className="flex space-x-1 sm:space-x-4">
              <button 
                onClick={() => scrollToSection('donate')}
                className="px-1 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:text-red-400 transition-colors"
              >
                Donate
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="px-1 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:text-red-400 transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('cast')}
                className="px-1 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:text-red-400 transition-colors"
              >
                <span className="hidden sm:inline">Cast & Crew</span>
                <span className="sm:hidden">Cast</span>
              </button>
              <button 
                onClick={() => scrollToSection('gallery')}
                className="px-1 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:text-red-400 transition-colors"
              >
                Gallery
              </button>
              <button 
                onClick={() => scrollToSection('playwright')}
                className="px-1 sm:px-4 py-2 text-xs sm:text-sm font-medium text-white hover:text-red-400 transition-colors"
              >
                <span className="hidden sm:inline">Playwright's Note</span>
                <span className="sm:hidden">Note</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Section 1: Home/Hero */}
      <section id="home" className="section-height theater-red flex flex-col">
        {/* Poster at very top */}
        <div className="flex-shrink-0 pt-24 sm:pt-20 pb-4 flex justify-center">
          <img 
            src={posterImageSrc} 
            alt="Not Our Home, Not Our Home - Theater Poster"
            className="w-[600px] h-[850px] object-contain rounded-lg shadow-2xl max-w-full max-h-full"
          />
        </div>

        {/* Main content - centered */}
        <div className="flex-1 flex flex-col justify-center items-center text-center px-4 sm:px-6 lg:px-8 py-8">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight italic">
                NOT OUR HOME, NOT OUR HOME
              </h1>
          <p className="text-lg sm:text-xl text-white/90 mb-4 font-medium">A new play by Ned Du</p>
          
          <div className="text-white/80 mb-8 max-w-2xl space-y-3">
            <p className="text-base sm:text-lg"><strong>Preview performance:</strong> August 9, 7:30 PM @ The Flea Theater</p>
            <p className="text-sm sm:text-base">(Presented by Rogue Theater Festival 2025)</p>
            <p className="text-sm sm:text-base">
              <a href="https://www.tickettailor.com/events/roguetheaterfestival/1733301" 
                 target="_blank" 
                 rel="noopener noreferrer"
                 className="text-white underline hover:text-white/80 transition-colors">
                Get tickets here
              </a>
            </p>
            <p className="text-base sm:text-lg"><strong>Main performance week:</strong> September 22–28 @ The Theater for the New City</p>
            <p className="text-sm sm:text-base">(Full schedule & ticket info coming soon)</p>
          </div>
        </div>


      </section>

      {/* Section 2: Donate */}
      <section id="donate" className="theater-beige py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-8">DONATE</h2>
          
          <div className="max-w-2xl mx-auto mb-8">
            <p className="text-xl text-gray-200 leading-relaxed mb-6">
              Help Us Build the September Show and Beyond.
            </p>
            <p className="text-lg text-gray-200 mb-8">
              Your donation supports artists and production costs. Thank you!
            </p>
          </div>
          
          <form action="https://www.paypal.com/donate" method="post" target="_top" className="inline-block">
            <input type="hidden" name="business" value="SZDKK426EJGCA" />
            <input type="hidden" name="no_recurring" value="0" />
            <input type="hidden" name="item_name" value="For our September show and beyond. The cast and crew of Not Our Home, Not Our Home thanks you! " />
            <input type="hidden" name="currency_code" value="USD" />
            <input 
              type="image" 
              src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" 
              name="submit" 
              title="PayPal - The safer, easier way to pay online!" 
              alt="Donate with PayPal button"
              className="hover:opacity-80 transition-all duration-300 hover:scale-110"
              style={{ 
                border: 0, 
                transform: 'scale(3.5)',
                margin: '60px 0'
              }}
            />
            <img alt="" src="https://www.paypal.com/en_US/i/scr/pixel.gif" width="1" height="1" style={{ border: 0 }} />
          </form>
        </div>
      </section>

      {/* Section 3: About the Play */}
      <section id="about" className="theater-gray py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">ABOUT THE PLAY</h2>
          
          <div className="prose prose-lg max-w-none text-gray-200">
            <p className="text-lg leading-relaxed">
              In this surreal drama-comedy, two Taiwanese-American brothers return to Taipei for Chinese New Year, carrying baggage both literal and emotional—including the ashes of a childhood cat. Set against political tension and ancestral ritual, <em>Not Our Home, Not Our Home</em> explores the costs of immigration, the ache of cultural dissonance, and the ghosts we carry across generations. Laced with dark humor, horror elements, and underscored by a lush original score, this play blurs the line between memory and myth, asking: What do we owe the places we leave behind—and the people we become?
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
                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Josh Lau" alt="Josh Lau headshot" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Josh Lau</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – YOUNGEST</p>
                  <TruncatedBio>
                    Josh, an Astoria based actor, is all the enthusiastic adjectives to be playing Youngest in this production of Not Our Home, Not Our Home! Last time he did the short version of this play, he told everyone to see Maybe Happy Ending--but since ticket prices have skyrocketed, he recommends at least the cast album. Love and thanks to Mom and Dad!
                  </TruncatedBio>
                </div>

                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Ding Lee" alt="Ding Lee headshot" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Ding Lee</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – MIDDLE</p>
                  <TruncatedBio>
                    Ding has recently moved back to America from London, where he trained at the National Youth Theatre of Great Britain and starred in Off-West End productions, festival films, and commercials for the UK and US market. He made his playwriting debut at the Barons Court Theatre in London.
                  </TruncatedBio>
                </div>

                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="John Jiang" alt="John Jiang headshot" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">John Jiang</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – ELDEST</p>
                  <TruncatedBio>
                    John Jiang is from Xinjiang China, and he came to the US at age of 15 to attend Cheshire Academy where he found his passion in acting, since then he acquired his BA in theater from Union College, and he recently graduated as a company member from American Academy of Dramatic Art. In the past decade, he has taken on a wide variety of roles on stage, such as Mary/Bingly from Pride And Prejudices, Lord Illingworth from A Woman of No Important and G. from Polaroid Stories, etc. He is extremely grateful and excited for this opportunity to bring this story to life at the Rogue Theater Festival. He would like to thank everyone who has helped him along his journey, especially his family who unfortunately cannot make it to the show.
                  </TruncatedBio>
                </div>

                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Dominic Wong" alt="Dominic Wong headshot" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Dominic Wong</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – UNCLE</p>
                  <TruncatedBio>
                    Bio coming soon
                  </TruncatedBio>
                </div>

                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Lei Chow" alt="Lei Chow headshot" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Lei Chow</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – FATHER</p>
                  <TruncatedBio>
                    Lei Chow holds BFA in acting of Brooklyn College and also the certificate of one year study of directing. He has been studying at HB Studio and finished the full 3 years program of Acting and Musical Singing performing art taught by Hellen Gallagher. He has been studying from Prof. Austin Pendleton at HB Studio for over 15 years and had been performing in the productions Austin directed. He won the Award of Outstanding Performance at 2015 Lower East Side Festival of the Arts for his performance of Dr. Naguchi, the top second forensic scientist in the US in 1970s, in Dr. Naguchi, directed by Crystal Field, the artistic director of Theater For The New City. During Covid-19, he played Mr. Lee in the award winning best short web series, Covid-Ditty episode 3, and it won the best Ensemble Acting award in the film festival in California. Lei Chow has done voice over work in bilinguals of Mandarin and English for TV commercials such as Tri-Honda 2014 & 2015, of Colgate, documentaries of video and audio programs, and the bilingual voice-over work for the award winning movie, "Saving Face". Lei Chow is also a film maker. In 2018, he directed an independent short movie called The Rekindling by the award winning playwright, Joe Davidson. It won the award for the best screen play. He did most of the cinematography for the film. He did the cinematography for Covid-Ditty episode 6, and it won the best film making award.
                  </TruncatedBio>
                </div>

                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Tien-Li Wu" alt="Tien-Li Wu headshot" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Tien-Li Wu</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – GRANDMOTHER</p>
                  <TruncatedBio>
                    After earning a dance degree from the National Taiwan University of Arts, Tien-Li Wu spent a decade in Taiwan's entertainment industry as a professional dancer and television host. She later moved to the United States, where she earned a degree in Film from the School of Visual Arts in New York. In recent years, she has continued to expand her creative journey by exploring the art of acting and broadening her artistic horizons.
                  </TruncatedBio>
                </div>

                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Boyu Chen" alt="Boyu Chen headshot" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Boyu Chen</h4>
                  <p className="text-white/80 text-sm mb-3">Actor – COUSIN / MASKED MAN / FLIGHT ATTENDANT / PASSPORT OFFICER / RADIO</p>
                  <TruncatedBio>
                    Bio coming soon
                  </TruncatedBio>
                </div>
              </div>
            </div>

            {/* Crew Section */}
            <div>
              <h3 className="text-2xl font-bold text-white text-center mb-8">CREW</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Ned Du" alt="Ned Du photo" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Ned Du</h4>
                  <p className="text-white/80 text-sm mb-3">WRITER and PRODUCER</p>
                  <TruncatedBio>
                    Ned Du is an award-winning Taiwanese-American writer and theater maker hailing from the sunlit suburbs of Southern California. Growing up in a predominantly Taiwanese community, he has a keen understanding of both the joys and tensions within the immigrant experience. His work, rich in themes of belonging and inherited guilt, explores what it means to navigate identity in a world of shifting expectations. For Ned, theater is a transformative space—a way to distill complex ideas, cultural discourse, and emerging trends into stories that resonate on a human level. He's grateful for every chance to experiment and bring to life the ideas that have been quietly stirring within him for years.
                  </TruncatedBio>
                </div>

                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Sissi Chen" alt="Sissi Chen photo" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Sissi Chen</h4>
                  <p className="text-white/80 text-sm mb-3">DIRECTOR</p>
                  <TruncatedBio>
                    Sissi Chen is a New York-based director, producer, and actor. As an adamant advocator for cross-cultural communication through theater, she has extensive experience in engaging English-Mandarin audiences. Recent theatre credits include Red Threads (2024), Don't Pitch It, Do It (2024), The President's Invitation (2024), Covenant (2023), Jonah (2023), I Need That (2023), Doubt (2024), Murder Up in the Air (2023), Once Upon a Story (2023).
                  </TruncatedBio>
                </div>

                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Daphne Lin" alt="Daphne Lin photo" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Daphne Lin</h4>
                  <p className="text-white/80 text-sm mb-3">STAGE MANAGER</p>
                  <TruncatedBio>
                    Bio coming soon
                  </TruncatedBio>
                </div>

                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Yung-Hung Sung" alt="Yung-Hung Sung photo" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Yung-Hung Sung</h4>
                  <p className="text-white/80 text-sm mb-3">LIGHTING DESIGNER</p>
                  <TruncatedBio>
                    Yung-Hung Sung, a lighting and scenic designer originally from Kaohsiung, Taiwan. Sung has collaborated with numerous theatre artists and companies. With over 90 productions, his design footprints have already been seen around several nations/festivals and major theaters in Taiwan, such as the National Theater of Taiwan, National Taichung Theater (Taiwan), and the National Kaohsiung Center for the Arts. Also, Edinburgh International Festival Fringe (UK), Proyector Festival (Spain), Beijing Dance Festival, Shanghai International Festival of Arts (China), Migration Matters Festival (UK), ChangMu Performing Arts Festival (Korea), Festival of Avignon Off (France), etc. Selected awards include Long River with WCdance, which was selected to be the annual winner of the 13th Taishin Arts Award. Panta Rhei, which was nominated for Emerging Lighting Design, World Stage Design Exhibition 2017 in Taipei, Taiwan. Ten Lines of Poetry to NK with Neo-Classic Chamber Ensemble, which received Bronze for Professional Lighting Design at the World Stage Design Exhibition 2022 in Calgary, Canada. He holds a Design MFA from Yale, the David Geffen School of Drama. He is also the recipient of the Jennifer Tipton Scholarship in Lighting, the Stanley McCandless Scholarship, the Donald and Zorka Oenslager Scholarship in Stage Design, the William and Sarah Hyman Scholarship, and the Government Scholarship to Study Abroad by the Ministry of Education, Taiwan. With the urgency to respond to the outbreaking global events and as a designer who sees all sectors in panorama, Sung finds the uniqueness and essence of live performance lie in its direct, multi-dimensional impact on the perceivers. He strives to use scenography as a medium to dissect the human condition, initiate inner dialogues, declare personal statements, and spark not only profound discussions but even reveal evasive conflicts. In line with the foregoing, he believes the emotional connection between the performers and the audience transcends the use of sophisticated words, intellectual concepts, and stunning visual effects. A thought-provoking performance can happen on a bare stage devoid of any design. "Scenography exists only when it helps tell a story better."
                  </TruncatedBio>
                </div>

                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Mamie Limbrick" alt="Mamie Limbrick photo" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Mamie Limbrick</h4>
                  <p className="text-white/80 text-sm mb-3">COMPOSER and SOUND DESIGNER</p>
                  <TruncatedBio>
                    Mamie Limbrick is an opera singer, composer, and theatre producer from the UK. She has performed at prestigious venues around the UK, namely the Royal Festival Hall and Glyndebourne Opera House. She has produced Off-West End plays, and her compositions have featured in short films and live theatre. She is excited to be making her American compositional debut.
                  </TruncatedBio>
                </div>

                <div className="text-center bg-black/20 border border-red-900/20 rounded-lg p-6">
                  <div className="w-32 h-32 rounded-lg mb-4 mx-auto overflow-hidden">
                    <HeadshotImage name="Qingan Zhang" alt="Qingan Zhang photo" />
                  </div>
                  <h4 className="text-white font-bold text-lg mb-1">Qingan Zhang</h4>
                  <p className="text-white/80 text-sm mb-3">SCENIC DESIGNER</p>
                  <TruncatedBio>
                    Qingan Zhang (She/Her) is a New York and Boston based scenic designer. Her work explores metaphorical narratives through bodily performance, physical materiality, and integrated spatial experience. Selected design credits include Galileo's Daughter (WAM Theatre), Nüwa in Fairyland (CHUANG Stage), The Chinese Lady (Central Square Theater), Wolf Play (Brandeis University). Associate credits include Franklin's Key (Pig Iron), Cymbeline (NAATCO), SUR (LA MAMA). Qingan's co-devising puppetry pieces have been showcased at New Ohio Theatre Ice Factory, Rattlestick Theater GFTF, and HERE Arts Center. Qingan is the co-founder of the non-profit interdisciplinary production company Cellunova Productions.
                  </TruncatedBio>
                </div>
              </div>
            </div>

            {/* Special Thanks Section */}
            <div className="text-center mt-16">
              <h3 className="text-2xl font-bold text-white mb-8">Special thanks to</h3>
              <div className="max-w-2xl mx-auto text-white/80 space-y-2">
                <p className="text-lg">Emily Her - POSTER DESIGNER</p>
                <p className="text-lg">Nikhil Haksar - STAND-IN</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 5: Gallery */}
      <section id="gallery" className="section-height bg-black py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-12">GALLERY</h2>
          
          <div className="flex-1 flex flex-col justify-center">
            <div className="relative max-w-4xl mx-auto">
              {/* Main Image */}
              <div className="relative aspect-[4/3] bg-gray-900 rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={basePath + galleryImages[currentImageIndex]}
                  alt={`Rehearsal photo ${currentImageIndex + 1}`}
                  className="w-full h-full object-cover"
                />
                
                {/* Navigation Arrows */}
                <button
                  onClick={previousImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft size={24} />
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight size={24} />
                </button>
              </div>
              
              {/* Image Counter */}
              <div className="text-center mt-6">
                <p className="text-white/70 text-sm">
                  {currentImageIndex + 1} of {galleryImages.length}
                </p>
              </div>
              
              {/* Thumbnail Navigation */}
              <div className="mt-8 flex justify-center">
                <div className="flex space-x-2 overflow-x-auto max-w-full pb-2">
                  {galleryImages.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`flex-shrink-0 w-16 h-12 rounded overflow-hidden border-2 transition-all ${
                        index === currentImageIndex 
                          ? 'border-red-500 opacity-100' 
                          : 'border-gray-600 opacity-60 hover:opacity-80'
                      }`}
                    >
                      <img
                        src={basePath + image}
                        alt={`Thumbnail ${index + 1}`}
                        className="w-full h-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Playwright's Note */}
      <section id="playwright" className="section-height theater-beige py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white text-center mb-8">PLAYWRIGHT'S NOTE</h2>
          
          <div className="prose prose-lg max-w-none text-gray-200 space-y-6 text-center">
            <div className="bg-black/30 p-8 rounded-lg border border-red-900/30">
              <h3 className="text-xl font-bold mb-4 text-white">A Message from the Writer:</h3>
              <div className="text-base leading-relaxed space-y-4">
                <p>
                  This play began with a dream: laughing red faces, a belly sloshing with Moutai, and—most stubbornly—the slow, annoying burn of guilt. From that strange dream bloomed <em>Not Our Home, Not Our Home</em>, a song of many notes: of immigration and memory, of brothers and borders, of languages spoken and unspoken.
                </p>
                <p>
                  At first, I thought I was going to be writing about belonging. But that question—do we belong?—has been asked by better writers than me and has never been a question I was interested in. What lingered wasn't the asking, but what comes after the answer. When we say yes, or no, or something in between—what do we lose in the choosing? What parts of ourselves get buried? What parts are invented?
                </p>
                <p>
                  That's where guilt creeps in. When belonging becomes a choice, guilt rushes in to fill the cracks. Guilt is the beating heart of this story. How do we carry it? How do we name it? What if it's not even ours, but something passed down—quietly, relentlessly? And guilt doesn't just haunt—it twists us, reshapes us, pushes us into doing the dumbest, most laughably human things. Guilt is powerful, yes. But it can also be deeply stupid and absurd.
                </p>
                <p>
                  We showed one small scene in December 2024 at the Immigrants in America Festival in Court Square Theater. To our joy, we won! In April 2025, we read the play aloud at the Dramatist Guild Foundation. Now, we plan to preview it at the Rogue Theater Festival, and soon, at the Theater for the New City. Each step has been a soft miracle. I intend to carry this story Off-Broadway, into bigger rooms. There's a bigger play in this. I'm not sure what it is yet, but I trust my actors and my crew to walk with me toward it.
                </p>
                <p>
                  Thank you to my cast and crew. You hauled props and yourselves across town, and kept showing up in the dog days of summer—tired, sweating, cracking jokes, still managing to inspire me.
                </p>
                <p>
                  If you'd like to help us keep building bigger shows, please consider donating. I hope you come, laugh, and then feel weird about laughing. That's how we know it's working.
                </p>
                <p className="font-semibold">
                  Thank you!<br/>
                  Ned Du
                </p>
              </div>
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
                © 2025 <em>NOT OUR HOME, NOT OUR HOME</em> • A play by Ned Du
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
