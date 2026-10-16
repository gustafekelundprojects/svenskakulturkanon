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
 ['På vilket språk skrev Johan Turi Muittalus sámid birra (1910)?',['Lulesamiska','Sydsamiska','Nordsamiska','Enaresamiska'],2,'Boken var den första som skrevs på nordsamiska av en same.'],
 ['Vilken del i serien Roman om ett brott är Den vedervärdige mannen från Säffle?',['Femte','Sjunde','Åttonde','Tionde'],1,'Den är den sjunde av Sjöwall & Wahlöös tio romaner (1965–1975).'],
 ['Ur vilken diktsamling kommer Edith Södergrans "Triumf att finnas till"?',['Landet som icke är','Septemberlyran','Rosenaltaret','Framtidens skugga'],1,'Dikten ingår i Septemberlyran från 1918.'],
 ['Ur vilken samling kommer Gunnar Ekelöfs "Eufori"?',['Sent på jorden','Färjesång','Non serviam','Strountes'],1,'Eufori ingår i Färjesång från 1941.'],
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
 ['Vilket år invigdes Stockholms stadshus?',['1911','1917','1923','1930'],2,'Ragnar Östbergs stadshus invigdes på midsommarafton 1923.'],
 ['Vilket år adlades Carl von Linné?',['1747','1753','1757','1762'],2,'Linné adlades 1757 och tog namnet von Linné 1762.'],
 ['I vilken stad trycktes första upplagan av Systema Naturae 1735?',['Uppsala','Amsterdam','Leiden','Haag'],2,'Första upplagan trycktes i Leiden och omfattade bara elva sidor.'],
 ['I vilken stad gavs Olaus Magnus Historia om de nordiska folken ut 1555?',['Danzig','Rom','Venedig','Lübeck'],1,'Verket trycktes i Rom, där Olaus Magnus levde i exil.'],
 ['Vilken riksdagsman var drivande bakom 1766 års tryckfrihetsförordning?',['Anders Chydenius','Peter Forsskål','Carl Fredrik Scheffer','Anders Nordencrantz'],0,'Anders Chydenius från Gamlakarleby drev frågan i riksdagen.'],
 ['Hur länge gällde 1809 års regeringsform?',['Till 1866','Till 1921','Till 1974','Den gäller fortfarande'],2,'Den ersattes av 1974 års regeringsform och gällde alltså i 165 år.'],
 ['Vilket år inrättades Riksbanken, världens äldsta centralbank?',['1610','1668','1694','1715'],1,'Riksbanken grundades 1668. Bank of England kom 1694.'],
 ['Vilket år slöts Saltsjöbadsavtalet mellan LO och SAF?',['1928','1932','1938','1945'],2,'Huvudavtalet slöts i december 1938.'],
 ['Vilket företag grundades 1907 kring Sven Wingquists sfäriska kullager?',['ASEA','SKF','Atlas','Alfa Laval'],1,'SKF, Svenska Kullagerfabriken, i Göteborg.'],
 ['Vilken typbeteckning har Saab Viggen?',['Saab 29','Saab 35','Saab 37','Saab 39'],2,'Viggen är Saab 37 och gjorde sin första flygning 1967.'],
 ['Vilket år delades det första Nobelpriset ut?',['1896','1899','1901','1905'],2,'De första prisen delades ut 1901, fem år efter Alfred Nobels död.'],
 ['Vilket år blev Sverige först i världen med föräldraförsäkring för båda föräldrarna?',['1964','1974','1980','1995'],1,'Föräldraförsäkringen 1974 gav pappor samma rätt som mammor.'],
 ['Vem vann det första Vasaloppet 1922?',['Ernst Alm','Per-Erik Hedlund','Sixten Jernberg','Nils "Mora-Nisse" Karlsson'],0,'Ernst Alm från Norbergs IK vann på 7 timmar och 32 minuter.'],
 ['Vem anses ha grundat Brunnsviks folkhögskola 1906?',['Karl-Erik Forsslund','Ellen Key','Rickard Sandler','Oscar Olsson'],0,'Karl-Erik Forsslund grundade skolan i Ludvika.'],
 ['Vilket år trycktes Gustav Vasas bibel?',['1526','1533','1541','1555'],2,'Den första fullständiga bibelöversättningen till svenska trycktes i Uppsala 1541.'],
 ['Vad hette poeten Lucidor egentligen?',['Lars Wivallius','Lars Johansson','Samuel Columbus','Georg Stiernhielm'],1,'Lucidor var pseudonym för Lars Johansson, stormaktstidens bohemiske skald som dog efter ett slagsmål 1674.'],
 ['Vem skrev förordet till Bellmans Fredmans epistlar 1790?',['Thomas Thorild','Carl Gustaf af Leopold','Johan Henric Kellgren','Anna Maria Lenngren'],2,'Kellgren skrev förordet och gav Bellmans epistlar litterär status.'],
 ['Vem stod till slut modell för mannen på verandan i Richard Berghs Nordisk sommarkväll?',['Per Hallström','Prins Eugen','Nils Kreuger','Karl Nordström'],1,'Författaren Per Hallström stod modell först men ersattes av Berghs vän prins Eugen.'],
 ['Vem var Sveriges förste justitieombudsman?',['Hans Järta','Georg Adlersparre','Lars Augustin Mannerheim','Carl Johan Adlercreutz'],2,'Lars Augustin Mannerheim valdes till den förste JO 1810.'],
 ['Vilken brittisk ingenjör knöts till bygget av Göta kanal?',['Thomas Telford','John Rennie','Isambard Kingdom Brunel','James Watt'],0,'Baltzar von Platen anlitade Thomas Telford, som stod bakom Caledonian Canal i Skottland.'],
 ['Vilken av dessa var en av de tre första kvinnor som prästvigdes i Svenska kyrkan 1960?',['Elin Wägner','Kerstin Hesselgren','Margit Sahlin','Emilia Fogelklou'],2,'Margit Sahlin prästvigdes 1960 tillsammans med Elisabeth Djurle och Ingrid Persson.'],
 ['Vilket yrke hade Tomas Tranströmer vid sidan av poesin?',['Läkare','Psykolog','Präst','Bibliotekarie'],1,'Tranströmer arbetade som psykolog, bland annat på en ungdomsanstalt och vid Arbetsmarknadsinstitutet i Västerås.'],
 ['Vem stiger ned till jorden för att se hur människorna har det i Strindbergs Ett drömspel?',['Indras dotter','Advokaten','Officeren','Diktaren'],0,'Guden Indras dotter stiger ned och konstaterar: ”Det är synd om människorna.”'],
 ['Vad heter huvudpersonen i Det går an?',['Sara Videbeck','Kristina Nilsson','Elisabeth Dohna','Marianne Sinclaire'],0,'Glasmästardottern Sara Videbeck vill leva med en man utan att gifta sig – därav skandalen 1839.'],
 ['Vad heter Pippi Långstrumps häst?',['Herr Nilsson','Lilla Gubben','Villekulla','Prickiga Pärla'],1,'Hästen heter Lilla Gubben. Herr Nilsson är apan.'],
 ['Vilken av dessa sånger har Alice Tegnér tonsatt?',['Imse vimse spindel','Bä, bä, vita lamm','Små grodorna','Nu tändas tusen juleljus'],1,'Bä, bä, vita lamm finns med i Sjung med oss, mamma. Nu tändas tusen juleljus är Emmy Köhlers.'],
 ['Vilken av dessa dikter skrev också Viktor Rydberg?',['Tomten','Hemlängtan','Sverige','Tomtarnas julnatt'],0,'Rydbergs Tomten (1881) – ”Midvinternattens köld är hård” – hör till de mest lästa svenska dikterna.'],
 ['Var tillkom Richard Berghs Nordisk sommarkväll?',['I Varberg','På Ekholmsnäs gård på Lidingö','I Skagen','På Tyresö slott'],1,'Motivet hämtades från Ekholmsnäs på Lidingö, där Bergh målade 1899–1900.'],
 ['I vilket landskap ligger Härkeberga kyrka med Albertus Pictors målningar?',['Södermanland','Västmanland','Uppland','Gotland'],2,'Härkeberga ligger i Enköpings kommun i Uppland.'],
 ['Vid vilket berg ligger Husaby kyrka?',['Omberg','Kinnekulle','Billingen','Hunneberg'],1,'Husaby kyrka ligger vid Kinnekulle i Västergötland, där Olof Skötkonung enligt traditionen döptes.'],
 ['Var invigdes Göta kanal 1832?',['Sjötorp','Motala','Mem','Berg'],2,'Karl XIV Johan invigde kanalen i Mem vid Slätbaken, kanalens östra ände.'],
 ['Vid vilket vattendrag växte industrilandskapet i Norrköping fram?',['Nyköpingsån','Motala ström','Svartån','Dalälven'],1,'Forsarna i Motala ström drev textilfabrikerna mitt i staden.'],
 ['På vilken ö i Stockholm ligger Riksdagshuset?',['Riddarholmen','Skeppsholmen','Helgeandsholmen','Stadsholmen'],2,'Riksdagshuset, ritat av Aron Johansson efter Zettervalls förslag, ligger på Helgeandsholmen.'],
 ['Mellan vilka orter går Vasaloppet?',['Mora–Sälen','Sälen–Mora','Idre–Mora','Sälen–Rättvik'],1,'Loppet går från Berga by i Sälen till Mora, 90 kilometer.'],
 ['Var bodde Edith Södergran större delen av sitt liv?',['Helsingfors','Åbo','Raivola på Karelska näset','Mariehamn'],2,'Södergran levde i Raivola, i dag i Ryssland, där hon dog 1923.'],
 ['Var föddes Erik Johan Stagnelius?',['Kalmar','Öland','Gotland','Visby'],1,'Stagnelius föddes på Öland som son till en prost och dog i Stockholm 1823.'],
 ['Från vilken by kom spelmannen Hjort Anders Olsson?',['Bingsjö','Malung','Orsa','Delsbo'],0,'Hjort Anders Olsson från Bingsjö i Dalarna är en av de mest inflytelserika spelmännen i svensk folkmusik.'],
 ['Från vilken socken utvandrar Karl Oskar och Kristina i Mobergs Utvandrarna?',['Moheda','Ljuder','Älmhult','Långasjö'],1,'De kommer från Ljuder socken i Småland.'],
 ['I vilken stad ligger domstolen som prövar Europakonventionen?',['Bryssel','Haag','Luxemburg','Strasbourg'],3,'Europadomstolen ligger i Strasbourg. Haag är FN-domstolen, Luxemburg EU-domstolen.'],
 ['I vilken stad har Svenska Akademiens ordbok sin redaktion?',['Stockholm','Uppsala','Lund','Göteborg'],2,'SAOB har redigerats i Lund sedan 1890-talet.'],
 ['Var omkom Dag Hammarskjöld 1961?',['Nära Ndola i nuvarande Zambia','I Léopoldville, Kongo','Vid Suezkanalen','I New York'],0,'Hammarskjölds plan störtade nära Ndola under ett fredsuppdrag i Kongokrisen.'],
 ['Vilket land tillhörde Malmö när Malmöpsalmboken gavs ut 1533?',['Sverige','Danmark','Hansan','Norge'],1,'Skåne var danskt fram till freden i Roskilde 1658.'],
 ['Mellan vilka riken slöts Lappkodicillen 1751?',['Sverige och Ryssland','Sverige och Danmark-Norge','Sverige och Finland','Danmark och Ryssland'],1,'Tillägget till gränstraktaten tryggade samernas rätt att flytta med renarna över gränsen.'],
 ['Vad är kallocain i Karin Boyes roman?',['Ett sanningsserum','En statlig myndighet','Ett gift','En hemlig rörelse'],0,'Kallocain är en drog som tvingar människor att avslöja sina innersta tankar.'],
 ['Vad ledde Strindbergs Giftas till 1884?',['Ett åtal för hädelse','Ett Nobelpris','Ett förbud mot boken i hela Norden','Hans inval i Svenska Akademien'],0,'Strindberg åtalades för hädelse för en passage om nattvarden men friades.'],
 ['Vad önskade Hilma af Klint för sina abstrakta målningar?',['Att de skulle brännas','Att de inte visades förrän tjugo år efter hennes död','Att de bara visades i kyrkor','Att de såldes till förmån för teosoferna'],1,'Hon bestämde att verken skulle vänta minst tjugo år efter hennes död, som inträffade 1944.'],
 ['Vad var syftet med storskiftet?',['Att samla böndernas utspridda tegar till större skiften','Att dela upp kronans skogar','Att avskaffa byarna','Att införa allmän skolplikt'],0,'Storskiftet från 1749 minskade antalet tegar och gjorde jordbruket effektivare.'],
 ['Vad innebar särbeskattningen av makar?',['Att makar beskattades var för sig för sina arbetsinkomster','Att gifta betalade lägre skatt','Att bara mannen deklarerade','Att förmögenhetsskatten avskaffades'],0,'Reformen gjorde det lönsamt för båda makarna att förvärvsarbeta.'],
 ['Vad var nytt med folkpensionen 1913?',['Den gällde bara industriarbetare','Den omfattade hela befolkningen','Den betalades av kyrkan','Den gällde bara män'],1,'Sverige blev ett av de första länderna med en allmän pension för alla medborgare.'],
 ['Vilket problem stod i centrum för Kris i befolkningsfrågan?',['Utvandringen till Amerika','Sjunkande födelsetal','Bostadsbristen i städerna','Arbetslösheten bland unga'],1,'Makarna Myrdal menade att barnafödandet sjönk och föreslog sociala reformer för familjer.'],
 ['Vad förbjöd konventikelplakatet?',['Religiösa sammankomster utan präst','Katolsk mässa','Psalmer på svenska','Bibelläsning i hemmen'],0,'Plakatet från 1726 förbjöd andaktsmöten i hemmen utan präst.'],
 ['Vad var Tabellkommissionens uppgift?',['Att föra Sveriges befolkningsstatistik','Att fastställa tullsatser','Att ta fram sjökort','Att mäta jordens form'],0,'Kommissionen gjorde Sverige till pionjär inom befolkningsstatistik.'],
 ['Vad var det nya med Cronstedts och Wredes kakelugn?',['Den eldades med kol','Långa rökgångar som lagrade värmen i murverket','Den hade inbyggd spis','Den var gjord av järn'],1,'Rökgångarna tog till vara värmen och minskade vedåtgången kraftigt.'],
 ['Vad var Saab 37 Viggen särskilt konstruerad för?',['Hangarfartyg','Korta start- och landningssträckor, även på vägbaser','Överljudsflyg med passagerare','Spaning i rymden'],1,'Viggen kunde operera från vanliga vägar, en del av det svenska bassystemet.'],
 ['Vad innehåller kupolen på Gustavianum i Uppsala?',['Ett observatorium','En anatomisk teater','Universitetets bibliotek','En kyrka'],1,'Olof Rudbeck d.ä. lät bygga den anatomiska teatern för offentliga dissektioner.'],
 ['Vad är Horologium Mirabile Lundense?',['Ett astronomiskt ur i Lunds domkyrka','En handskrift om stjärnorna','En orgel','En kalender i sten'],0,'Uret från 1400-talet visar tid, datum och himlakropparnas rörelser.'],
 ['Vilket slott brann 1697 och ersattes av Kungliga slottet?',['Tre Kronor','Uppsala slott','Kalmar slott','Svartsjö'],0,'Tessin d.y. hade redan börjat bygga om Tre Kronor när slottet brann.'],
 ['Vad hette Riksbankens föregångare?',['Stockholms Banco','Kungliga Myntet','Riksgäldskontoret','Handelsbanken'],0,'Johan Palmstruchs Stockholms Banco gav ut Europas första sedlar men kraschade.'],
 ['Vad kallas det stora raset i Falu koppargruva 1687?',['Gruvfallet','Stora stöten','Kopparraset','Bergsbrottet'],1,'Stora stöten skapade den väldiga öppningen i gruvan, som i dag är världsarv.'],
 ['Vad står bokstäverna i IKEA för?',['Ingvar Kamprad, Elmtaryd, Agunnaryd','Ingvar Kamprad Eget Aktiebolag','Ingvar Kamprad, Europa, Amerika','Industri Kamprad Export AB'],0,'Initialerna, gården Elmtaryd och byn Agunnaryd i Småland.'],
 ['Vilken lag ersattes av brottsbalken 1965?',['1734 års lag','Strafflagen från 1864','Rättegångsbalken','Missgärningsbalken'],1,'Brottsbalken ersatte 1864 års strafflag och lade större vikt vid vård än straff.'],
 ['Hur inleds 1974 års regeringsform?',['Sverige är ett konungarike','All offentlig makt i Sverige utgår från folket','Med lag skall land byggas','Riksdagen är folkets främsta företrädare'],1,'Första paragrafen slår fast folksuveräniteten.'],
 ['Vad kallas huvudavdelningarna i 1734 års lag?',['Flockar','Balkar','Kapitel','Böcker'],1,'Lagen var indelad i balkar, som Giftermålsbalken och Ärvdabalken. Flockar användes i landskapslagarna.'],
 ['Vad innebar Magnus Erikssons landslag?',['En gemensam lag för hela rikets landsbygd','Den första stadslagen','Ett förbud mot träldom','Den första grundlagen'],0,'Landslagen ersatte de olika landskapslagarna omkring 1350.'],
 ['Vilket land syftade Karl Gerhards Den ökända hästen från Troja på?',['Sovjetunionen','Nazityskland','Storbritannien','Italien'],1,'Kupletten 1940 varnade för tysk infiltration och stoppades av censuren.'],
 ['Vilken film från 1976 bygger på Den vedervärdige mannen från Säffle?',['Mannen på taket','Mannen från Mallorca','Brandbilen som försvann','Polis, polis, potatismos'],0,'Bo Widerbergs Mannen på taket är en av de mest kända svenska polisfilmerna.'],
 ['Vilken sommarteater förknippas med Nils Poppe och Fars lille påg?',['Fredriksdalsteatern i Helsingborg','Vallarnas friluftsteater','Parkteatern','Sommarteatern i Kolmården'],0,'Poppe ledde Fredriksdalsteatern i Helsingborg i många år.'],
 ['På vilket språk spreds Heliga Birgittas uppenbarelser i Europa?',['Fornsvenska','Latin','Italienska','Tyska'],1,'Birgitta dikterade på svenska, men biktfäderna översatte till latin, som spreds över Europa.'],
 ['I vilken stad dog drottning Kristina?',['Antwerpen','Paris','Rom','Innsbruck'],2,'Kristina dog i Rom 1689 och är begravd i Peterskyrkan.'],
 ['Vilket ämbete hade Emanuel Swedenborg i Bergskollegium?',['President','Assessor','Kamrer','Bergmästare'],1,'Swedenborg var assessor i Bergskollegium innan han ägnade sig helt åt andliga frågor.'],
 ['Ur vilken samling kommer Pär Lagerkvists Det är vackrast när det skymmer?',['Ångest','Kaos','Hjärtats sånger','Aftonland'],1,'Dikten ingår i Kaos från 1919.'],
 ['Ur vilken samling kommer Nils Ferlins Stjärnorna kvittar det lika?',['En döddansares visor','Goggles','Barfotabarn','Med många kulörta lyktor'],0,'Debutsamlingen En döddansares visor kom 1930.'],
 ['Ur vilken samling kommer Sonja Åkessons Äktenskapsfrågan?',['Husfrid','Leva livet','Glasvasen','Pris'],0,'Äktenskapsfrågan ingår i Husfrid från 1963.'],
 ['Var höll Per Albin Hansson folkhemstalet 1928?',['I riksdagens andra kammare','På LO-kongressen','I Folkets hus i Malmö','På Skansen'],0,'Talet hölls i andra kammarens remissdebatt den 18 januari 1928.'],
 ['Vem kallas ofta den svenska målarkonstens fader?',['David Klöcker Ehrenstrahl','Albertus Pictor','Alexander Roslin','Carl Larsson'],0,'Ehrenstrahl kom till Sverige som ung och blev hovmålare under stormaktstiden.']
],
VECKOR: [
 {
  "vecka": 42,
  "ar": 2026,
  "nr": "3",
  "hook": "",
  "credit": "Selma Lagerlöf, 1922. Foto: Ateljé Jaeger. Public domain. Källa: Mårbacka / Wikimedia Commons.",
  "quiz": [
   "huvudpersonen i Det går an",
   "Lucidor"
  ],
  "bokSida": 20,
  "ingress": "Gösta Berlings saga var Selma Lagerlöfs debutroman och kom ut 1891. Den har blivit ett av den svenska litteraturens mest kända verk. Romanen utspelar sig i 1820-talets Värmland och förenar realism med romantik och mytiska inslag. I centrum står den avsatte prästen Gösta Berling, som efter sitt fall blir en av de beryktade kavaljererna på Ekeby.",
  "person": {
   "namn": "Selma Lagerlöf",
   "levde": "1858–1940",
   "roll": "Författare",
   "text": "Selma Lagerlöf föddes på Mårbacka i Värmland och utbildade sig till lärarinna. Gösta Berlings saga mottogs svalt när den kom 1891 – genombrottet kom först sedan Georg Brandes hyllat den danska översättningen. 1909 blev hon den första kvinnan och den första svensken att tilldelas Nobelpriset i litteratur, och 1914 den första kvinnliga ledamoten i Svenska Akademien."
  }
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
  "ingress": "Ingmar Bergmans Det sjunde inseglet, med premiär 1957, är ett av den moderna filmens mest ikoniska verk. Filmen utspelar sig i medeltidens Sverige och förenar existentiell filosofi med symboliskt bildspråk. Berättelsen om riddaren som spelar schack med Döden har blivit en universell metafor för människans sökande efter mening i en osäker värld. Genom en kombination av expressionistisk bildkomposition, allegorisk dramaturgi och enkel mänsklighet skapade Bergman ett verk som definierade svensk film internationellt och gjorde den till en del av den globala konstfilmens språk.",
  "person": {
   "namn": "Ingmar Bergman",
   "levde": "1918–2007",
   "roll": "Regissör och manusförfattare",
   "text": "Ingmar Bergman växte upp i en prästfamilj, började som teaterman och fann tidigt sitt ämne i det inre samtalet mellan människa och Gud. När Det sjunde inseglet visades i Cannes 1957 blev den hans internationella genombrott. Med Smultronstället och Persona skapade han ett filmspråk som förenade poesi och filosofi."
  }
 },
 {
  "vecka": 44,
  "ar": 2026,
  "nr": "86",
  "hook": "Ett land binds samman.",
  "credit": "S/S Motala Express på Göta kanals akvedukt över riksväg 34. Foto: Patrik Nylin. Beskuren. CC BY-SA.",
  "quiz": [
   "brittisk ingenjör",
   "Var invigdes Göta kanal"
  ],
  "bokSida": 222,
  "ingress": "Göta kanal, byggd 1810–1832 under ledning av Baltzar von Platen, är ett av de största byggnadsprojekt som genomförts i Sverige. Den 190 kilometer långa vattenvägen från Sjötorp vid Vänern till Mem vid Slätbaken skapade, tillsammans med Trollhätte kanal och Göta älv, en vattenväg tvärs genom landet från Östersjön till Västerhavet. Kanalen har 58 slussar, och 87 kilometer av sträckan grävdes eller sprängdes fram. Omkring 58 000 soldater deltog vid olika tillfällen i arbetet, som krävde sammanlagt omkring sju miljoner dagsverken.",
  "person": {
   "namn": "Baltzar von Platen",
   "levde": "1766–1829",
   "roll": "Sjöofficer och kanalbyggare",
   "text": "Baltzar von Platen föddes på Rügen i Svenska Pommern. Som ung sjöofficer sårades han vid Hogland 1788 och satt två år i rysk fångenskap. Göta kanal blev hans livsverk: han vann stödet, knöt Thomas Telford till bygget och drev arbetet i nästan två decennier. Han dog 1829, tre år innan kanalen stod klar, och ligger begravd vid kanalen i Motala."
  }
 },
 {
  "vecka": 45,
  "ar": 2026,
  "nr": "23",
  "hook": "Folkliv i rörelse.",
  "credit": "Anders Zorn, Midsommardans, 1897. Nationalmuseum. Public domain. Källa: Wikimedia Commons.",
  "quiz": [
   "Hugo Alfvéns Midsommarvaka",
   "Alice Tegnér"
  ],
  "bokSida": 84,
  "ingress": "Hugo Alfvéns Midsommarvaka, eller Svensk rapsodi nr 1, komponerad 1903, uruppförd 10 maj 1904, är ett av den svenska orkesterrepertoarens mest spelade verk. Med rötter i folkmusiken och den nationalromantiska rörelsen skildrar den den svenska sommarens ljus, dans och fest. Alfvén förenar symfoniskt hantverk med folklig melodik, där konstmusikens form möter spelmannens rytm och liv. Genom Midsommarvaka skapades en symfonisk bild av svensk sommar som förenar naturlyrik, energi och glädje – ett musikaliskt uttryck för sekelskiftets strävan att ge nationen en egen ton.",
  "person": {
   "namn": "Hugo Alfvén",
   "levde": "1872–1960",
   "roll": "Tonsättare, dirigent och målare",
   "text": "Hugo Alfvén föddes i Stockholm och utbildades vid Musikkonservatoriet som violinist. Genombrottet kom 1904 med Midsommarvaka, där folkliga melodier blev orkestral konstmusik. Han skrev fem symfonier och dirigerade Orphei Drängar i närmare fyra decennier – och var dessutom en skicklig målare."
  }
 },
 {
  "vecka": 46,
  "ar": 2026,
  "nr": "15",
  "hook": "",
  "credit": "Richard Bergh, Nordisk sommarkväll. Motivet föreställer Karin Pyk och prins Eugen. Public domain. Källa: Wikimedia Commons.",
  "quiz": [
   "Var tillkom Richard Berghs",
   "modell för mannen"
  ],
  "bokSida": 66,
  "ingress": "Nordisk sommarkväll (1899–1900) är ett av den svenska nationalromantikens mest kända verk. Målningen tillkom vid Ekholmsnäs på Lidingö och förenar noggrann naturiakttagelse med symbolism och stämningsmåleri. En kvinna och en man står på en veranda i skymningsljuset, med landskapet utbrett framför sig. Mellan människorna och naturen uppstår en ordlös förbindelse.",
  "person": {
   "namn": "Richard Bergh",
   "levde": "1858–1919",
   "roll": "Målare och konstteoretiker",
   "text": "Richard Bergh föddes i Stockholm, utbildades vid Konstakademien och studerade vidare i Frankrike. Som ledande kraft i Konstnärsförbundet förnyade han det svenska konstlivet, och med Nils Kreuger och Karl Nordström utvecklade han Varbergsskolans stämningsmåleri. Från 1915 var han chef för Nationalmuseum."
  }
 }
]
}