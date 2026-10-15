// Gemensam data för svenskakulturkanon.se och Instagram-mallarna.
// AVSNITT: [glyf, namn, ingress, [[nr, titel, upphov], ...]]
// QUIZ: [fråga, [A, B, C, D], index för rätt svar, förklaring]
// VECKOR: veckans verk per ISO-vecka. 'quiz' anger sökord för veckans två Instagram-frågor.
window.KANON = {
AVSNITT: [
 ['a','Litteratur – prosa','Prosaverk som format Sveriges litterära själ.',[['1','Det går an','C.J.L. Almqvist, 1839'],['2','Giftas I–II','August Strindberg, 1884 och 1886'],['3','Gösta Berlings saga','Selma Lagerlöf, 1891'],['4','Muittalus sámid birra','Johan Turi, 1910'],['5','Kallocain','Karin Boye, 1940'],['6','Pippi Långstrump','Astrid Lindgren, 1945'],['7','Utvandrarna','Vilhelm Moberg, 1949'],['8','Katitzi','Katarina Taikon, 1969'],['9','Den vedervärdige mannen från Säffle','Sjöwall & Wahlöö, 1971']]],
 ['h','Litteratur – dikter','Poesi som format det svenska språket och känslolivet.',[['10.1','Skulle jag sörja då vore jag tokot','Lucidor'],['10.2','Fredmans epistel nr 30','Carl Michael Bellman'],['10.3','Några ord till min kära dotter','Anna Maria Lenngren'],['10.4','Vän! I förödelsens stund','E.J. Stagnelius'],['10.5','Triumf att finnas till','Edith Södergran'],['10.6','Det är vackrast när det skymmer','Pär Lagerkvist'],['10.7','Stjärnorna kvittar det lika','Nils Ferlin'],['10.8','Eufori','Gunnar Ekelöf'],['10.9','Den halvfärdiga himlen','Tomas Tranströmer'],['10.10','Äktenskapsfrågan I–II','Sonja Åkesson']]],
 ['x','Bild & form','Måleri, arkitektur och design som präglat svensk estetik.',[['11','Kalkmåleri i Härkeberga kyrka','Albertus Pictor'],['12','Gripsholms slott, porträttsamlingen',''],['13','Självporträtt med allegorier','D.K. Ehrenstrahl'],['14','Kungliga slottet','Tessin d.y., Hårleman'],['15','Nordisk sommarkväll','Richard Bergh'],['16','Lilla Hyttnäs, Sundborn','Karin & Carl Larsson'],['17','Målningarna till templet','Hilma af Klint'],['18','Tomtebobarnen','Elsa Beskow'],['19','Stockholms stadshus','Ragnar Östberg'],['20','Sitting… Six months later','Öyvind Fahlström']]],
 ['v','Musik','Från barockens hovmusik till folkmusik, jazz och modern konstmusik.',[['21','Drottningholmsmusiken','J.H. Roman'],['22','Sjung med oss, mamma','Alice Tegnér'],['23','Midsommarvaka, op. 19','Hugo Alfvén'],['24','Tre inspelade låtar','Hjort Anders Olsson'],['25','Flyttningssång / Till kåtan och hemmet','L. Sikku, F. Johansson'],['26','Calle Schewens vals / Möte i monsunen','Evert Taube'],['27','Förklädd gud, op. 24','Lars-Erik Larsson'],['28','Aniara','Karl-Birger Blomdahl'],['29','Jazz på svenska','Jan Johansson'],['30','Symfoni nr 7','Allan Pettersson']]],
 ['e','Film & scenkonst','Teater, dans och film som speglar människans och samhällets förändring.',[['31','Drottningholms slottsteater','C.F. Adelcrantz'],['32','Lejonets unge','Frida Stéenhoff'],['33','Ett drömspel','August Strindberg'],['34','Körkarlen','Victor Sjöström'],['35','Gullregn / Den ökända hästen från Troja','Karl Gerhard'],['36','Fröken Julie','Birgit Cullberg'],['37','Det sjunde inseglet','Ingmar Bergman'],['38','Dom kallar oss mods','Jarl & Lindqvist'],['39','Fars lille påg','Arnold, Bach, Poppe'],['40','Medeas barn','Unga Klara']]],
 ['i','Lärdom & sakprosa','Verk som bidragit till vetenskap, filosofi och idéhistoria.',[['41','Heliga Birgittas uppenbarelser',''],['42','Historia om de nordiska folken','Olaus Magnus'],['43','Christinas självbiografi','Drottning Christina'],['44','Lappländsk resa','Carl von Linné'],['45','Drömbok','Emanuel Swedenborg'],['46','Fädernas gudasaga','Viktor Rydberg'],['47','Svenska folkets underbara öden','Carl Grimberg'],['48','Barnets århundrade','Ellen Key'],['49','Kris i befolkningsfrågan','Alva & Gunnar Myrdal'],['50','Vägmärken','Dag Hammarskjöld']]],
 ['w','Lag & rätt','Lagar och principer som format frihet, jämlikhet och rättvisa.',[['51','Magnus Erikssons landslag',''],['52','1734 års lag',''],['53','1766 års tryckfrihetsförordning',''],['54','Offentlighetsprincipen',''],['55','1809 års regeringsform',''],['56','Rättegångsbalken',''],['57','Europakonventionen',''],['58','Brottsbalken',''],['59','1974 års regeringsform',''],['60','Allemansrätten','']]],
 ['q','Religion','Heliga platser, texter och beslut som speglar tro och etik.',[['61','Husaby kyrka',''],['62','Vadstena kloster','Heliga Birgitta'],['63','Horologium Mirabile Lundense',''],['64','Malmöpsalmboken','Christiern Pedersen'],['65','Gustav Vasas bibel',''],['66','Konventikelplakatet',''],['67','Marstrands synagoga',''],['68','O store Gud','Carl Boberg'],['69','Prästämbetet öppnas för kvinnor',''],['70','Nattvardsgästerna','Ingmar Bergman']]],
 ['s','Offentlighet','Byggnader, institutioner, utbildning, sport och medier.',[['91','Gustavianum i Uppsala','Olof Rudbeck d.ä.'],['92','1634 års regeringsform','Axel Oxenstierna'],['93','Lappkodicillen',''],['94','Svenska Akademiens ordbok','Gustav III'],['95','Läsebok för folkskolan','Norstedts & F.F. Carlson'],['96','Riksdagshuset','Zettervall, Johansson'],['97','Brunnsviks folkhögskola','K-E Forsslund'],['98','Vasaloppet','Anders Pers & IFK Mora'],['99','Folkhemstalet','Per Albin Hansson'],['100','Radiohuset','Ahnborg & Lindström']]],
 ['C','Ekonomi','Institutioner, reformer och idéer som byggt landets välstånd.',[['71','Falu koppargruva',''],['72','Riksbanken',''],['73','Storskiftet',''],['74','Näringsfrihetsförordningen','J.A. Gripenstedt'],['75','Industrilandskapet i Norrköping',''],['76','Harsprånget i Lule älv',''],['77','Folkpensionsreformen',''],['78','Saltsjöbadsavtalet','LO & SAF'],['79','IKEA Älmhult','Ingvar Kamprad'],['80','Särbeskattning av makar','']]],
 ['r','Uppfinningar','Innovationer som uttrycker svensk uppfinningsrikedom.',[['81','Luft- och eldmaskin','Mårten Triewald'],['82','Systema Naturae','Carl von Linné'],['83','Tabellkommissionen','Pehr Wargentin'],['84','Kakelugnen','Wrede & Cronstedt'],['85','Justitieombudsmannen','Järta & bondeståndet'],['86','Göta kanal','Baltzar von Platen'],['87','Nobelpriset','Alfred Nobel'],['88','Det sfäriska kullagret','Sven Wingquist'],['89','Viggen','Saab'],['90','Pappaledigheten','']]]
],
QUIZ: [
 ['Vilket år kom Carl Jonas Love Almqvists Det går an?',['1829','1839','1849','1859'],1,'Det går an kom 1839 och väckte skandal med sin skildring av ett samboförhållande utan äktenskap.'],
 ['På vilket språk skrev Johan Turi Muittalus sámid birra (1910)?',['Lulesamiska','Sydsamiska','Nordsamiska','Enaresamiska'],2,'Boken var den första som skrevs på nordsamiska av en same.'],
 ['Vilken del i serien Roman om ett brott är Den vedervärdige mannen från Säffle?',['Femte','Sjunde','Åttonde','Tionde'],1,'Den är den sjunde av Sjöwall & Wahlöös tio romaner (1965–1975).'],
 ['Vilket år publicerades Karin Boyes Kallocain?',['1934','1938','1940','1946'],2,'Kallocain kom 1940, året efter krigsutbrottet.'],
 ['Ur vilken diktsamling kommer Edith Södergrans "Triumf att finnas till"?',['Landet som icke är','Septemberlyran','Rosenaltaret','Framtidens skugga'],1,'Dikten ingår i Septemberlyran från 1918.'],
 ['Ur vilken samling kommer Gunnar Ekelöfs "Eufori"?',['Sent på jorden','Färjesång','Non serviam','Strountes'],1,'Eufori ingår i Färjesång från 1941.'],
 ['Vilket år publicerades Bellmans Fredmans epistlar som samling?',['1772','1781','1790','1795'],2,'Fredmans epistlar gavs ut 1790, Fredmans sånger året efter.'],
 ['Vilket år tilldelades Pär Lagerkvist Nobelpriset i litteratur?',['1946','1951','1958','1966'],1,'Lagerkvist fick Nobelpriset 1951.'],
 ['Vem skrev texten till Lars-Erik Larssons Förklädd gud?',['Erik Lindegren','Hjalmar Gullberg','Bo Bergman','Anders Österling'],1,'Lyrisk svit från 1940 till text av Hjalmar Gullberg.'],
 ['Vems diktepos bygger Karl-Birger Blomdahls opera Aniara på?',['Erik Lindegren','Gunnar Ekelöf','Harry Martinson','Pär Lagerkvist'],2,'Harry Martinsons Aniara (1956). Operan hade premiär på Kungliga Operan 1959.'],
 ['Vem spelade kontrabas på Jan Johanssons Jazz på svenska?',['Red Mitchell','Georg Riedel','Palle Danielsson','Arne Domnérus'],1,'Skivan spelades in med Georg Riedel på bas och gavs ut 1964.'],
 ['Vem dirigerade uruppförandet av Allan Petterssons Symfoni nr 7 1968?',['Sixten Ehrling','Herbert Blomstedt','Antal Doráti','Stig Westerberg'],2,'Antal Doráti och Stockholms Filharmoniker uruppförde symfonin 1968.'],
 ['Vilken undertitel har Hugo Alfvéns Midsommarvaka?',['Svensk rapsodi nr 1','Dalarapsodi','Uppenbarelsekantat','Skärgårdssägen'],0,'Midsommarvaka, op. 19, är Svensk rapsodi nr 1 från 1903.'],
 ['Vilket kungligt bröllop var Johan Helmich Romans Drottningholmsmusiken skriven till?',['Gustav III och Sofia Magdalena','Adolf Fredrik och Lovisa Ulrika','Fredrik I och Ulrika Eleonora','Karl XIII och Hedvig Elisabet Charlotta'],1,'Musiken skrevs till bröllopet 1744 mellan kronprins Adolf Fredrik och Lovisa Ulrika.'],
 ['Vem ritade Drottningholms slottsteater, invigd 1766?',['Nicodemus Tessin d.y.','Carl Hårleman','Carl Fredrik Adelcrantz','Louis Jean Desprez'],2,'Carl Fredrik Adelcrantz ritade teatern efter att den tidigare brunnit.'],
 ['Vems roman bygger Victor Sjöströms Körkarlen (1921) på?',['Hjalmar Bergman','Selma Lagerlöf','Sigfrid Siwertz','Gustaf af Geijerstam'],1,'Körkarlen bygger på Selma Lagerlöfs roman från 1912.'],
 ['I vilken stad uruppfördes Birgit Cullbergs balett Fröken Julie 1950?',['Stockholm','Göteborg','Västerås','Malmö'],2,'Baletten uruppfördes i Västerås 1950 innan den kom till Kungliga Operan.'],
 ['Vilket år hade Det sjunde inseglet premiär?',['1953','1955','1957','1960'],2,'Ingmar Bergmans film hade premiär 1957.'],
 ['Vilka gjorde dokumentärfilmen Dom kallar oss mods (1968)?',['Stefan Jarl och Jan Lindqvist','Roy Andersson och Bo Widerberg','Jan Troell och Bengt Forslund','Vilgot Sjöman och Lasse Forsberg'],0,'Stefan Jarl och Jan Lindqvist. Filmen blev början på Jarls modstrilogi.'],
 ['Vilken teater satte upp Medeas barn 1975?',['Stadsteatern','Unga Klara','Fria Proteatern','Dramaten'],1,'Unga Klara, i regi av Suzanne Osten och med text av Per Lysander och Osten.'],
 ['Under vilka år målade Hilma af Klint Målningarna till templet?',['1896–1904','1906–1915','1912–1920','1917–1926'],1,'Serien om 193 verk tillkom 1906–1915.'],
 ['Vilket år invigdes Stockholms stadshus?',['1911','1917','1923','1930'],2,'Ragnar Östbergs stadshus invigdes på midsommarafton 1923.'],
 ['Vilket år adlades Carl von Linné?',['1747','1753','1757','1762'],2,'Linné adlades 1757 och tog namnet von Linné 1762.'],
 ['I vilken stad trycktes första upplagan av Systema Naturae 1735?',['Uppsala','Amsterdam','Leiden','Haag'],2,'Första upplagan trycktes i Leiden och omfattade bara elva sidor.'],
 ['I vilken stad gavs Olaus Magnus Historia om de nordiska folken ut 1555?',['Danzig','Rom','Venedig','Lübeck'],1,'Verket trycktes i Rom, där Olaus Magnus levde i exil.'],
 ['När publicerades Emanuel Swedenborgs Drömbok?',['1745','1772','1859','1912'],2,'Dagboken från 1743–44 upptäcktes senare och gavs ut 1859.'],
 ['Vilket år kom Ellen Keys Barnets århundrade?',['1896','1900','1905','1909'],1,'Boken kom 1900 och översattes till ett tiotal språk.'],
 ['Vilket år publicerades Kris i befolkningsfrågan?',['1928','1931','1934','1938'],2,'Alva och Gunnar Myrdals bok kom 1934, folkupplagan 1935.'],
 ['När gavs Dag Hammarskjölds Vägmärken ut?',['1957','1961','1963','1966'],2,'Den gavs ut postumt 1963, två år efter hans död.'],
 ['Vilken riksdagsman var drivande bakom 1766 års tryckfrihetsförordning?',['Anders Chydenius','Peter Forsskål','Carl Fredrik Scheffer','Anders Nordencrantz'],0,'Anders Chydenius från Gamlakarleby drev frågan i riksdagen.'],
 ['Hur länge gällde 1809 års regeringsform?',['Till 1866','Till 1921','Till 1974','Den gäller fortfarande'],2,'Den ersattes av 1974 års regeringsform och gällde alltså i 165 år.'],
 ['Vilket år inrättades Riksbanken, världens äldsta centralbank?',['1610','1668','1694','1715'],1,'Riksbanken grundades 1668. Bank of England kom 1694.'],
 ['Vilket år blev Falu koppargruva världsarv?',['1991','1996','2001','2006'],2,'Gruvan och Bergslagen kring Falun blev världsarv 2001.'],
 ['Vilket år slöts Saltsjöbadsavtalet mellan LO och SAF?',['1928','1932','1938','1945'],2,'Huvudavtalet slöts i december 1938.'],
 ['Vilket år höll Per Albin Hansson sitt folkhemstal?',['1921','1928','1932','1936'],1,'Talet hölls i andra kammaren i januari 1928.'],
 ['Vilket år infördes den allmänna folkpensionen?',['1891','1913','1935','1946'],1,'Folkpensionsreformen 1913 var världens första allmänna pensionsförsäkring.'],
 ['Vilket år infördes särbeskattning av makar?',['1965','1971','1976','1980'],1,'Särbeskattningen infördes 1971.'],
 ['Vilket år öppnade IKEA sitt första varuhus i Älmhult?',['1948','1953','1958','1965'],2,'Varuhuset i Älmhult öppnade 1958.'],
 ['Vilket företag grundades 1907 kring Sven Wingquists sfäriska kullager?',['ASEA','SKF','Atlas','Alfa Laval'],1,'SKF, Svenska Kullagerfabriken, i Göteborg.'],
 ['Vilken typbeteckning har Saab Viggen?',['Saab 29','Saab 35','Saab 37','Saab 39'],2,'Viggen är Saab 37 och gjorde sin första flygning 1967.'],
 ['Vilket år invigdes Göta kanal i sin helhet?',['1810','1822','1832','1846'],2,'Kanalen invigdes 1832, men Baltzar von Platen dog 1829 och såg den aldrig färdig.'],
 ['Vilket år delades det första Nobelpriset ut?',['1896','1899','1901','1905'],2,'De första prisen delades ut 1901, fem år efter Alfred Nobels död.'],
 ['Vilket år blev Sverige först i världen med föräldraförsäkring för båda föräldrarna?',['1964','1974','1980','1995'],1,'Föräldraförsäkringen 1974 gav pappor samma rätt som mammor.'],
 ['Vilket år inrättades Justitieombudsmannen?',['1766','1789','1809','1840'],2,'JO inrättades i 1809 års regeringsform.'],
 ['Vem vann det första Vasaloppet 1922?',['Ernst Alm','Per-Erik Hedlund','Sixten Jernberg','Nils "Mora-Nisse" Karlsson'],0,'Ernst Alm från Norbergs IK vann på 7 timmar och 32 minuter.'],
 ['Vem anses ha grundat Brunnsviks folkhögskola 1906?',['Karl-Erik Forsslund','Ellen Key','Rickard Sandler','Oscar Olsson'],0,'Karl-Erik Forsslund grundade skolan i Ludvika.'],
 ['Vilket år kom första häftet av Svenska Akademiens ordbok?',['1786','1853','1893','1925'],2,'Första häftet kom 1893. Akademien grundades av Gustav III 1786.'],
 ['Vilket år fattade kyrkomötet beslutet att kvinnor kan bli präster?',['1949','1958','1964','1972'],1,'Beslutet togs 1958 och de första kvinnorna prästvigdes 1960.'],
 ['När upphävdes konventikelplakatet från 1726?',['1809','1838','1858','1951'],2,'Plakatet, som förbjöd religiösa sammankomster utan präst, upphävdes 1858.'],
 ['Vilket år trycktes Gustav Vasas bibel?',['1526','1533','1541','1555'],2,'Den första fullständiga bibelöversättningen till svenska trycktes i Uppsala 1541.'],
 ['Vilket år kom Elsa Beskows Tomtebobarnen?',['1897','1901','1910','1921'],2,'Tomtebobarnen kom 1910.'],
 ['Vilket år hade Läsebok för folkskolan sin första upplaga?',['1842','1856','1868','1882'],2,'Första upplagan kom 1868 och omfattade 564 sidor.'],
 ['Vilket år kom Viktor Rydbergs Fädernas gudasaga?',['1862','1873','1887','1898'],2,'Boken om den nordiska mytologin kom 1887.']
],
VECKOR: [
 {
  "vecka": 42,
  "ar": 2026,
  "nr": "3",
  "hook": "",
  "credit": "Selma Lagerlöf, 1922. Foto: Ateljé Jaeger. Public domain. Källa: Mårbacka / Wikimedia Commons.",
  "quiz": [],
  "bokSida": 20,
  "ingress": "Gösta Berlings saga var Selma Lagerlöfs debutroman och kom ut 1891. Den har blivit ett av den svenska litteraturens mest kända verk. Romanen utspelar sig i 1820-talets Värmland och förenar realism med romantik och mytiska inslag. I centrum står den avsatte prästen Gösta Berling, som efter sitt fall blir en av de beryktade kavaljererna på Ekeby."
 },
 {
  "vecka": 43,
  "ar": 2026,
  "nr": "37",
  "hook": "Att möta döden ansikte mot ansikte.",
  "credit": "Inspelningen av Det sjunde inseglet på Gamla Filmstaden i Solna, 1957. Foto: Louis Huch / Svensk Filmindustri. Public domain. Källa: Wikimedia Commons.",
  "quiz": [
   "Körkarlen",
   "Fröken Julie"
  ],
  "bokSida": 114,
  "ingress": "Ingmar Bergmans Det sjunde inseglet, med premiär 1957, är ett av den moderna filmens mest ikoniska verk. Filmen utspelar sig i medeltidens Sverige och förenar existentiell filosofi med symboliskt bildspråk. Berättelsen om riddaren som spelar schack med Döden har blivit en universell metafor för människans sökande efter mening i en osäker värld. Genom en kombination av expressionistisk bildkomposition, allegorisk dramaturgi och enkel mänsklighet skapade Bergman ett verk som definierade svensk film internationellt och gjorde den till en del av den globala konstfilmens språk."
 },
 {
  "vecka": 44,
  "ar": 2026,
  "nr": "86",
  "hook": "Ett land binds samman.",
  "credit": "S/S Motala Express på Göta kanals akvedukt över riksväg 34. Foto: Patrik Nylin. Beskuren. CC BY-SA.",
  "quiz": [
   "Riksbanken",
   "Wingquists"
  ],
  "bokSida": 222,
  "ingress": "Göta kanal, byggd 1810–1832 under ledning av Baltzar von Platen, är ett av de största byggnadsprojekt som genomförts i Sverige. Den 190 kilometer långa vattenvägen från Sjötorp vid Vänern till Mem vid Slätbaken skapade, tillsammans med Trollhätte kanal och Göta älv, en vattenväg tvärs genom landet från Östersjön till Västerhavet. Kanalen har 58 slussar, och 87 kilometer av sträckan grävdes eller sprängdes fram. Omkring 58 000 soldater deltog vid olika tillfällen i arbetet, som krävde sammanlagt omkring sju miljoner dagsverken."
 },
 {
  "vecka": 45,
  "ar": 2026,
  "nr": "23",
  "hook": "Folkliv i rörelse.",
  "credit": "Anders Zorn, Midsommardans, 1897. Nationalmuseum. Public domain. Källa: Wikimedia Commons.",
  "quiz": [
   "Stockholms stadshus",
   "adlades"
  ],
  "bokSida": 84,
  "ingress": "Hugo Alfvéns Midsommarvaka, eller Svensk rapsodi nr 1, komponerad 1903, uruppförd 10 maj 1904, är ett av den svenska orkesterrepertoarens mest spelade verk. Med rötter i folkmusiken och den nationalromantiska rörelsen skildrar den den svenska sommarens ljus, dans och fest. Alfvén förenar symfoniskt hantverk med folklig melodik, där konstmusikens form möter spelmannens rytm och liv. Genom Midsommarvaka skapades en symfonisk bild av svensk sommar som förenar naturlyrik, energi och glädje – ett musikaliskt uttryck för sekelskiftets strävan att ge nationen en egen ton."
 },
 {
  "vecka": 46,
  "ar": 2026,
  "nr": "15",
  "hook": "",
  "credit": "Richard Bergh, Nordisk sommarkväll. Motivet föreställer Karin Pyk och prins Eugen. Public domain. Källa: Wikimedia Commons.",
  "quiz": [
   "Aniara",
   "Symfoni nr 7"
  ],
  "bokSida": 66,
  "ingress": "Nordisk sommarkväll (1899–1900) är ett av den svenska nationalromantikens mest kända verk. Målningen tillkom vid Ekholmsnäs på Lidingö och förenar noggrann naturiakttagelse med symbolism och stämningsmåleri. En kvinna och en man står på en veranda i skymningsljuset, med landskapet utbrett framför sig. Mellan människorna och naturen uppstår en ordlös förbindelse."
 }
]
};
