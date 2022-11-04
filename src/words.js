const words = [
  {
    root: "ab-, a-, abs-",
    meaning: "away from",
    origin: "Latin",
    etymology: 'ab "away"',
    examples: "abnormal, abrasion, absent, abstain, abstract, aversion"
  },
  {
    root: "ac-",
    meaning: "sharp or pointed",
    origin: "Latin",
    etymology: "acere",
    examples: "acupuncture"
  },
  {
    root: "acerb-",
    meaning: "sharp, bitter, sour",
    origin: "Latin",
    etymology: "acerbus",
    examples: "acerbic, exacerbate"
  },
  {
    root: "acid-",
    meaning: "sour or acid",
    origin: "Latin",
    etymology: "acidus",
    examples: "acidosis"
  },
  {
    root: "acr-",
    meaning: "height, summit, tip",
    origin: "Greek",
    etymology: 'ἄκρος (ákros) "high", "extreme"',
    examples: "acrobatics, acromegaly, acronym, acrophobia"
  },
  {
    root: "acr-",
    meaning: "bitter, pungent, sharp, sour",
    origin: "Latin",
    etymology: "acer, acris",
    examples: "acrid, acrimony"
  },
  {
    root: "acu-",
    meaning: "sharp",
    origin: "Latin",
    etymology:
      'acutus, past participle of acuere "to sharpen", from acus "needle"',
    examples: "acupuncture, acute, acutifoliate"
  },
  {
    root: "ad-, a-, ac-, af-, ag-, al-, ap-, ar-, as-, at-",
    meaning: "movement to or toward; in addition to",
    origin: "Latin",
    etymology: 'ad "to", "toward"',
    examples: "accept, adapt, affect, approximate, ascend"
  },
  {
    root: "adip-",
    meaning: "fat",
    origin: "Latin",
    etymology: 'adeps, adipis "fat"',
    examples: "adipose"
  },
  {
    root: "aer-",
    meaning: "air, atmosphere",
    origin: "Greek",
    etymology: 'ἀήρ (aēr) "air"',
    examples: "aeronautics, aerosol"
  },
  {
    root: "aesthet-",
    meaning: "feeling, sensation",
    origin: "Greek",
    etymology:
      'aisthētikos "of sense perception" from αἰσθάνεσθαι. (aisthanesthai) "to perceive"',
    examples: "aesthetics, anaesthetic"
  },
  {
    root: "agr-",
    meaning: "field",
    origin: "Greek",
    etymology: 'ἀγρός (agros) "field"',
    examples: "agronomy"
  },
  {
    root: "agri-, -egri-",
    meaning: "field",
    origin: "Latin",
    etymology: 'ager, agris "field, country"',
    examples: "agriculture, peregrine"
  },
  {
    root: "alb-",
    meaning: "dull white",
    origin: "Latin",
    etymology: "albus",
    examples: "albedo, albino, albumen"
  },
  {
    root: "am-, amat-, amor-",
    meaning: "love, loved",
    origin: "Latin",
    etymology: 'amor "love" from amāre "to love"',
    examples: "amateur, amorous"
  },
  {
    root: "ambi-",
    meaning: "both, on both sides",
    origin: "Latin",
    etymology: 'ambi "on both sides"',
    examples: "ambidexterity, ambivalent"
  },
  {
    root: "amic-, -imic-",
    meaning: "friend",
    origin: "Latin",
    etymology: "amicus",
    examples: "amicable, inimical"
  },
  {
    root: "amph-, amphi-",
    meaning: "around, about, both, on both sides of, both kinds",
    origin: "Greek",
    etymology: 'ἀμφί (amphi) "on both sides"',
    examples: "amphibian, amphibolic, amphoterism"
  },
  {
    root: "ampl-",
    meaning: "ample, abundant, bountiful",
    origin: "Latin",
    etymology: "amplus",
    examples: "amplification"
  },
  {
    root: "an-, a-",
    meaning: "not, without",
    origin: "Greek",
    etymology: 'Greek ἀν-/ἀ- "not"',
    examples: "anhydrous, atypical"
  },
  {
    root: "ana-, an-",
    meaning: "again, against, back, up",
    origin: "Greek",
    etymology: 'ἀνά (ana) "again", "against"',
    examples: "anabaptist, anaphylaxis, anion, anode"
  },
  {
    root: "andr-",
    meaning: "male, masculine",
    origin: "Greek",
    etymology: "ἀνδρός andros",
    examples: "androgen, android"
  },
  {
    root: "anem-",
    meaning: "wind",
    origin: "Greek",
    etymology: "ἄνεμος anemos",
    examples: "anemometer"
  },
  {
    root: "anim-",
    meaning: "breath",
    origin: "Latin",
    etymology: 'anima "breath"',
    examples: "animal, animation"
  },
  {
    root: "ann-, -enn-",
    meaning: "year, yearly",
    origin: "Latin",
    etymology: 'annus "year"',
    examples: "anniversary, annual, biannual, millennium"
  },
  {
    root: "ant-, anti-",
    meaning: "against, opposed to, preventive",
    origin: "Greek",
    etymology: 'ἀντί anti "against"',
    examples: "antagonist, antibiotic, antipodes"
  },
  {
    root: "ante-, anti-",
    meaning: "before, in front of, prior to",
    origin: "Latin",
    etymology: 'ante "before", "against"',
    examples: "antebellum, antediluvian, anticipate, antiquarian"
  },
  {
    root: "anth-",
    meaning: "flower",
    origin: "Greek",
    etymology: 'ἄνθος (anthos) "flower"',
    examples: "anther, anthology"
  },
  {
    root: "anthrop-",
    meaning: "human",
    origin: "Greek",
    etymology: 'ἄνθρωπος (anthropos) "man"',
    examples: "anthropology, anthropomorphic"
  },
  {
    root: "ap-, apo-",
    meaning: "away from, separate, at the farthest point",
    origin: "Greek",
    etymology: 'ἀπό (apo) "from, away, un-, quite"',
    examples: "apocrine, apogee, apostasy"
  },
  {
    root: "aqu-",
    meaning: "water",
    origin: "Latin",
    etymology: "aqua",
    examples: "aquamarine, aquarium, aqueduct, aquifer"
  },
  {
    root: "ar-",
    meaning: "plow, till",
    origin: "Latin",
    etymology: "ărāre",
    examples: "arable"
  },
  {
    root: "ar-",
    meaning: "be dry",
    origin: "Latin",
    etymology: 'ārēre "be dry or parched"',
    examples: "arid"
  },
  {
    root: "arche-, archi-",
    meaning: "ruler",
    origin: "Greek",
    etymology: 'ἀρχή (archē) "rule" (in compounds: ἀρχε-, ἀρχι-)',
    examples: "archangel, archetype"
  },
  {
    root: "archae-, arche-",
    meaning: "ancient",
    origin: "Greek",
    etymology: 'ἀρχαῖος arkhaios "ancient" from arkhē "beginning"',
    examples: "archaeology or archeology, archaic"
  },
  {
    root: "arct-",
    meaning:
      "Relating to the North Pole or the region near it; relating to cold; used as the scientific name of some bear species, e.g. Ursus arctos horribilis",
    origin: "Greek",
    etymology: 'ἄρκτος arktos "bear"',
    examples: "Arctic Ocean"
  },
  {
    root: "argent-",
    meaning: "silver",
    origin: "Latin",
    etymology: "argentum",
    examples: "argent, Argentina"
  },
  {
    root: "arist-",
    meaning: "excellence",
    origin: "Greek",
    etymology: "ἀρετή, ἄριστος aretē, aristos",
    examples: "aristocracy"
  },
  {
    root: "arthr-",
    meaning: "joint",
    origin: "Greek",
    etymology: "ἄρθρον (arthron)",
    examples: "arthritis, arthropod"
  },
  {
    root: "astr-",
    meaning: "star, star-shaped",
    origin: "Greek",
    etymology: 'ἄστρον (astron) "star"',
    examples: "asterisk, astrology, astronomy, disaster"
  },
  {
    root: "athl-",
    meaning: "prize",
    origin: "Greek",
    etymology: 'ἄθλος (athlos) "contest, feat"',
    examples: "athlete, pentathlon"
  },
  {
    root: "audi-",
    meaning: "hearing, listening, sound",
    origin: "Latin",
    etymology: 'audire "to hear"',
    examples: "audible, auditorium, auditory"
  },
  {
    root: "aug-, auct-",
    meaning: "grow, increase",
    origin: "Latin",
    etymology: 'augēre, auctus "to increase"',
    examples: "augend, augmentation"
  },
  {
    root: "aur-",
    meaning: "relating to gold, or gold-colored",
    origin: "Latin",
    etymology: 'aurum "gold"',
    examples: "aureate, aureole"
  },
  {
    root: "auri-",
    meaning: "relating to the ear",
    origin: "Latin",
    etymology: 'auris "ear"',
    examples: "auricle"
  },
  {
    root: "aut-, auto-",
    meaning: "self; directed from within",
    origin: "Greek",
    etymology: 'αὐτός (autos) "self", "same"',
    examples: "autograph, automobile, autonomy"
  },
  {
    root: "avi-",
    meaning: "bird",
    origin: "Latin",
    etymology: "avis",
    examples: "aviary, aviation"
  },
  {
    root: "axi-",
    meaning: "axis",
    origin: "Latin",
    etymology: "axis",
    examples: "axisymmetry"
  },
  {
    root: "axio-",
    meaning: "merit",
    origin: "Greek",
    etymology: 'ἄξιος (axios) "worth"',
    examples: "axiology"
  },
  {
    root: "bac-",
    meaning: "rod-shaped",
    origin: "Latin",
    etymology: 'from baculum "rod"',
    examples: "bacilla, bacteria"
  },
  {
    root: "bar-",
    meaning: "weight, pressure",
    origin: "Greek",
    etymology: "βάρος (baros)",
    examples: "barograph, barometer"
  },
  {
    root: "basi-",
    meaning: "at the bottom",
    origin: "Greek",
    etymology: "from βαίνω, I walk, march, βάσις 'step'.",
    examples: "basic, basis"
  },
  {
    root: "bathy-, batho-",
    meaning: "deep, depth",
    origin: "Greek",
    etymology: "βαθύς (bathús, bathýs)",
    examples: "batholith, bathyscaphe"
  },
  {
    root: "be-, beat-",
    meaning: "bless",
    origin: "Latin",
    etymology: "beare, beatus",
    examples: "beatification"
  },
  {
    root: "bell-",
    meaning: "war",
    origin: "Latin",
    etymology: "bellum, belli",
    examples: "antebellum, bellicose, belligerent"
  },
  {
    root: "ben-",
    meaning: "good, well",
    origin: "Latin",
    etymology: "bene (adverb)",
    examples: "benefit, benignity"
  },
  {
    root: "bi-",
    meaning: "two",
    origin: "Latin",
    etymology: 'bis, "twice"; bini, "in twos"',
    examples: "binary, binoculars, bigamy, biscotti"
  },
  {
    root: "bib-",
    meaning: "drink",
    origin: "Latin",
    etymology: "bibere, bibitus",
    examples: "imbibe"
  },
  {
    root: "bibl-",
    meaning: "book",
    origin: "Greek",
    etymology: 'βιβλίον (biblíon) "book"',
    examples: "bible, bibliography"
  },
  {
    root: "bio-",
    meaning: "life",
    origin: "Greek",
    etymology: 'βίος (bíos) "life"',
    examples: "biography, biology, biologist, biosphere, bioluminescent"
  },
  {
    root: "blenn-",
    meaning: "slime",
    origin: "Greek",
    etymology: "βλέννος (blennos)",
    examples: "blennophobia, blennosperma"
  },
  {
    root: "blast-",
    meaning: "germ, embryo, bud, cell with nucleus",
    origin: "Greek",
    etymology: 'βλασταίνω (blastainō), "I put forth shoots"',
    examples: "blastula, fibroblast, osteoblast, sideroblast"
  },
  {
    root: "bon-",
    meaning: "good",
    origin: "Latin",
    etymology: "bonus",
    examples: "bonify, bonitary"
  },
  {
    root: "bor-",
    meaning: "north",
    origin: "Greek / Latin",
    etymology: 'Greek βορρᾶς (borras) "the north wind"',
    examples: "borealis"
  },
  { origin: "(boreas)" },
  {
    root: "botan-",
    meaning: "plant",
    origin: "Greek",
    etymology: "βοτάνη, βότανον (botanē, botanon)",
    examples: "botany"
  },
  {
    root: "bov-",
    meaning: "cow, ox",
    origin: "Latin",
    etymology: "bos, bovis",
    examples: "bovine"
  },
  {
    root: "brachi-",
    meaning: "arm",
    origin: "Greek",
    etymology: "βραχίων (brakhíōn)",
    examples: "brachial artery, brachiosaurus"
  },
  {
    root: "brachy-",
    meaning: "short",
    origin: "Greek",
    etymology: "βραχύς (brakhús, brakhýs)",
    examples: "brachydactyly"
  },
  {
    root: "brady-",
    meaning: "slow",
    origin: "Greek",
    etymology: "βραδύς (bradús, bradýs)",
    examples: "bradycardia"
  },
  {
    root: "branchi-",
    meaning: "gill",
    origin: "Greek",
    etymology: "βράγχιον (brágkhion, bránkhion)",
    examples: "branchiopod, nudibranch"
  },
  {
    root: "brev(i)-",
    meaning: "brief, short (time)",
    origin: "Latin",
    etymology: "brevis, breviare",
    examples: "abbreviation, brevity"
  },
  {
    root: "briz-",
    meaning: "nod, slumber",
    origin: "Greek",
    etymology: "βρίζω (brizō)"
  },
  {
    root: "brom-",
    meaning: "oats",
    origin: "Greek",
    etymology: "βρόμος, βρόμη (brómos, bróme) 'oats'",
    examples: "Bromus ramosus"
  },
  {
    root: "brom-",
    meaning: "stench",
    origin: "Greek",
    etymology: 'βρόμος (brómos) "stench, clangor"',
    examples: "bromide"
  },
  {
    root: "bronch-",
    meaning: "windpipe",
    origin: "Greek",
    etymology: "βρόγχος (brógkhos, brónkhos)",
    examples: "bronchitis, bronchus, bronchiole"
  },
  {
    root: "bront-",
    meaning: "thunder",
    origin: "Greek",
    etymology: "βροντή (brontē)",
    examples: "Brontosaurus"
  },
  {
    root: "bucc-",
    meaning: "cheek, mouth, cavity",
    origin: "Latin",
    etymology: "bucca",
    examples: "buccal, buccinator muscle"
  },
  {
    root: "bulb-",
    meaning: "bulbous",
    origin: "Latin",
    etymology: "bulbus",
    examples: "bulbous, bulbule"
  },
  {
    root: "bull-",
    meaning: "bubble, flask",
    origin: "Latin",
    etymology: 'bulla, "bubble"',
    examples: "ebullient, ebullism"
  },
  {
    root: "burs-",
    meaning: "pouch, purse",
    origin: "Latin",
    etymology: "bursa",
    examples: "bursa, bursar, bursary, disburse"
  },
  {
    root: "cac-",
    meaning: "bad",
    origin: "Greek",
    etymology: "κακός (kakos)",
    examples: "cacophony"
  },
  {
    root: "cad-, -cid-, cas-",
    meaning: "fall",
    origin: "Latin",
    etymology: "cadere, casus",
    examples: "accident, cadence, case"
  },
  {
    root: "caed-, -cid-, caes-, -cis-",
    meaning: "cut",
    origin: "Latin",
    etymology: "caedere, caesus",
    examples: "caesura, incisor"
  },
  {
    root: "calc-",
    meaning: "stone",
    origin: "Latin and Greek",
    etymology:
      'from Latin calx "lime", and from Greek χάλιξ (khalix) "pebble" "limestone"',
    examples: "calcite, calcium, calculus"
  },
  {
    root: "call-, calli-",
    meaning: "beautiful",
    origin: "Greek",
    etymology: 'from Greek κάλλος kallos "beauty"',
    examples: "calligraphy"
  },
  {
    root: "calor-",
    meaning: "heat",
    origin: "Latin",
    etymology: 'calor "heat"',
    examples: "calorie"
  },
  {
    root: "calyp-",
    meaning: "cover",
    origin: "Greek",
    etymology: "καλύπτειν (kaluptein)",
    examples: "apocalypse"
  },
  {
    root: "camer-",
    meaning: "vault",
    origin: "Latin",
    etymology: "camera",
    examples: "bicameral, camera"
  },
  {
    root: "camp-",
    meaning: "field",
    origin: "Latin",
    etymology: 'campus "field", "level ground"',
    examples: "champion, campaign"
  },
  {
    root: "can-",
    meaning: "dog",
    origin: "Latin",
    etymology: "canis",
    examples: "canine, Canis Major"
  },
  {
    root: "can-, -cin-, cant-",
    meaning: "sing",
    origin: "Latin",
    etymology: "canere",
    examples: "cantata, canto, cantor"
  },
  {
    root: "cand-",
    meaning: "glowing, iridescent",
    origin: "Latin",
    etymology: 'candere "to be white or glisten"',
    examples:
      "candela, candid, candle, candor, incandescent, incendiary, incense"
  },
  {
    root: "cap-, -cip-, capt-, -cept-",
    meaning: "hold, take",
    origin: "Latin",
    etymology:
      'capere, captus "take or hold" (vowel changes from a to i in compounds)',
    examples: "capture, captive, conception, recipient"
  },
  {
    root: "capit-, -cipit-",
    meaning: "head",
    origin: "Latin",
    etymology: 'caput, capitis "head"',
    examples: "capital, decapitation, precipitation"
  },
  {
    root: "capr-",
    meaning: "goat",
    origin: "Latin",
    etymology: "caper, capri",
    examples: "Capricorn, caprine"
  },
  {
    root: "caps-",
    meaning: "box, case",
    origin: "Latin",
    etymology: "capsa",
    examples: "capsule"
  },
  {
    root: "carbo-",
    meaning: "coal",
    origin: "Latin",
    etymology: "carbo, carbonis",
    examples: "carbon"
  },
  {
    root: "carcer-",
    meaning: "jail",
    origin: "Latin",
    etymology: "carcer, carcerare",
    examples: "incarceration"
  },
  {
    root: "carcin-",
    meaning: "cancer (disease)",
    origin: "Latin from Greek",
    etymology: 'Latin from Greek καρκίνος (karkinos), "crab"',
    examples: "carcinogenic, carcinoma"
  },
  {
    root: "cardi-",
    meaning: "relating to the heart",
    origin: "Greek",
    etymology: 'καρδιά kardia "heart"',
    examples: "cardiograph, cardiology"
  },
  {
    root: "cardin-",
    meaning: "hinge",
    origin: "Latin",
    etymology: "cardo, cardinis",
    examples: "cardinal"
  },
  {
    root: "carn-",
    meaning: "flesh",
    origin: "Latin",
    etymology: "caro, carnis",
    examples: "carnal, carnival, carnivore"
  },
  {
    root: "carp-",
    meaning: "relating to fruit",
    origin: "Greek",
    etymology: 'καρπός (karpos) "fruit"',
    examples: "carpology"
  },
  {
    root: "carp-",
    meaning: "relating to the wrist",
    origin: "Greek",
    etymology: 'καρπός (karpos) "wrist"',
    examples: "carpal, carpal tunnel syndrome"
  },
  {
    root: "cast-",
    meaning: "pure",
    origin: "Latin",
    etymology: 'from Latin castus "chaste"',
    examples: "caste, castigate, castrate"
  },
  {
    root: "cata-, cat-",
    meaning: "down",
    origin: "Greek",
    etymology: 'from Greek κατά (katá) "down"',
    examples: "catabolic, catalyst, catastrophe, catatonia, cathode, cation"
  },
  {
    root: "caten-",
    meaning: "chain",
    origin: "Latin",
    etymology: "catena",
    examples: "catenary, concatenation"
  },
  {
    root: "cathar-",
    meaning: "pure",
    origin: "Greek",
    etymology: "καθαρός (katharos)",
    examples: "catharsis"
  },
  {
    root: "caud-",
    meaning: "tail",
    origin: "Latin",
    etymology: "cauda",
    examples: "caudal"
  },
  {
    root: "caus-, -cus-",
    meaning: "cause or motive",
    origin: "Latin",
    etymology: "causa",
    examples: "causative"
  },
  {
    root: "cav-",
    meaning: "hollow",
    origin: "Latin",
    etymology: 'cavus "hollow"',
    examples: "cave, cavity, excavation"
  },
  {
    root: "ced-, cess-",
    meaning: "go",
    origin: "Latin",
    etymology: "cedere, cessus",
    examples: "procession, recede, secede"
  },
  {
    root: "celer-",
    meaning: "quick",
    origin: "Latin",
    etymology: "celer, celerare",
    examples: "acceleration, celerity"
  },
  {
    root: "cen-",
    meaning: "new",
    origin: "Greek",
    etymology: "καινός (kainos)",
    examples: "Cenozoic"
  },
  {
    root: "cen-",
    meaning: "empty",
    origin: "Greek",
    etymology: "κενός (kenos)",
    examples: "cenotaph"
  },
  {
    root: "cens-",
    origin: "Latin",
    etymology: 'censere "to estimate"',
    examples: "census"
  },
  {
    root: "cent-",
    meaning: "hundred",
    origin: "Latin",
    etymology: "centum",
    examples: "cent, centennial, centurion"
  },
  {
    root: "centen-",
    meaning: "hundred each",
    origin: "Latin",
    etymology: "centeni",
    examples: "centenary"
  },
  {
    root: "centesim-",
    meaning: "hundredth",
    origin: "Latin",
    etymology: "centesimus",
    examples: "centesimal, centesimation"
  },
  {
    root: "centr-",
    meaning: "center",
    origin: "Greek",
    etymology: 'κέντρον (kéntron) "needle", "spur"',
    examples: "eccentric"
  },
  {
    root: "cephal-",
    meaning: "head",
    origin: "Greek",
    etymology: "κεφαλή (kephale)",
    examples: "cephalic, cephalopod, encephalogram"
  },
  {
    root: "ceram-",
    meaning: "clay",
    origin: "Greek",
    etymology: "κέραμος (keramos)",
    examples: "ceramic"
  },
  {
    root: "cerat-",
    meaning: "horn",
    origin: "Greek",
    etymology: 'κέρας, κέρατος (keras, keratos) "horn"',
    examples: "keratin"
  },
  {
    root: "cern-",
    meaning: "sift",
    origin: "Latin",
    etymology: "cernere",
    examples: "discern, secern"
  },
  {
    root: "cervic-",
    meaning: "relating to the neck, relating to the cervix",
    origin: "Latin",
    etymology: 'cervix, cervicis "neck"',
    examples: "cervix, cervical"
  },
  {
    root: "ceter-",
    meaning: "other",
    origin: "Latin",
    etymology: "ceterus",
    examples: "et cetera"
  },
  {
    root: "chir-",
    meaning: "of the hand or hands",
    origin: "Greek",
    etymology: 'χείρ (kheir) "hand"',
    examples: "chiral, chiropractic, chiroptera"
  },
  {
    root: "chelon-",
    meaning: "relating to a turtle",
    origin: "Greek",
    etymology: 'χελώνη (khelōne) "tortoise"',
    examples: "chelonia"
  },
  {
    root: "chlor-",
    meaning: "green",
    origin: "Greek",
    etymology: 'χλωρός (khlōros) "green"',
    examples: "chlorine, chlorophyll, chloroplast"
  },
  {
    root: "chore-",
    meaning: "relating to dance",
    origin: "Greek",
    etymology: 'χορεία khoreia "dancing in unison" from χορός khoros "chorus"',
    examples: "choreography"
  },
  {
    root: "chord-",
    meaning: "cord",
    origin: "Latin and Greek",
    etymology: 'chorda "rope" from χορδή (chordē)',
    examples: "chordata"
  },
  {
    root: "chrom-",
    meaning: "color",
    origin: "Greek",
    etymology: 'χρῶμα (chrōma) "color"',
    examples: "chromium, chromosome, monochrome"
  },
  {
    root: "chron-",
    meaning: "time",
    origin: "Greek",
    etymology: "χρόνος (chronos)",
    examples: "chronic, chronology, chronometer"
  },
  {
    root: "chrys-",
    meaning: "gold",
    origin: "Greek",
    etymology: 'χρυσός (khrusos) "gold"',
    examples: "chrysolite"
  },
  {
    root: "cili-",
    meaning: "eyelash",
    origin: "Latin",
    etymology: "cilium",
    examples: "cilia, supercilious"
  },
  {
    root: "cine-",
    meaning: "motion",
    origin: "Greek",
    etymology: "κινέω (kineō)",
    examples: "cinema"
  },
  {
    root: "ciner-",
    meaning: "ash",
    origin: "Latin",
    etymology: "cinis, cineris",
    examples: "incineration"
  },
  {
    root: "cing-, cinct-",
    meaning: "gird",
    origin: "Latin",
    etymology: "cingere, cinctus",
    examples: "succinct"
  },
  {
    root: "circ-",
    meaning: "circle",
    origin: "Latin",
    etymology: "circus",
    examples: "circus"
  },
  {
    root: "circum-",
    meaning: "around",
    origin: "Latin",
    etymology: "circum",
    examples: "circumcise, circumference, circumlocution, circumnavigate"
  },
  {
    root: "cirr-",
    meaning: "orange",
    origin: "Greek",
    etymology: "κιρρός (kirros)",
    examples: "cirrhosis"
  },
  {
    root: "cirr-",
    meaning: "curl, tentacle",
    origin: "Latin",
    etymology: "cirrus",
    examples: "cirrus"
  },
  {
    root: "civ-",
    meaning: "citizen",
    origin: "Latin",
    etymology: "civis",
    examples: "civility"
  },
  {
    root: "clad-",
    meaning: "branch",
    origin: "Greek",
    etymology: "κλάδος (klados)",
    examples: "clade"
  },
  {
    root: "clar-",
    meaning: "clear",
    origin: "Latin",
    etymology: "clarus, clarare",
    examples: "clarity, declaration"
  },
  {
    root: "clast-",
    meaning: "broken",
    origin: "Greek",
    etymology: "κλαστός (klastos)",
    examples: "iconoclast, osteoclast"
  },
  {
    root: "claud-, -clud-, claus-, -clus-",
    meaning: "close",
    origin: "Latin",
    etymology: "claudere, clausus",
    examples: "clause, exclusion, include"
  },
  {
    root: "clav-",
    meaning: "key",
    origin: "Greek",
    etymology:
      'from Greek κλείς kleis "key" from κλείειν, (kleiein) "to close"',
    examples: "clavichord, clavicle, conclave"
  },
  {
    root: "cl(e)ist-",
    meaning: "closed",
    origin: "Greek",
    etymology: "κλειστός (kleistos)"
  },
  {
    root: "cleithr-",
    meaning: "bar, key",
    origin: "Greek",
    examples: "cleithrum"
  },
  {
    root: "clement-",
    meaning: "mild",
    origin: "Latin",
    etymology: "clemens, clementis",
    examples: "clemency, inclement"
  },
  {
    root: "clin-",
    meaning: "bed, lean, recline",
    origin: "Latin",
    etymology: "-clinare",
    examples: "declination, inclined"
  },
  {
    root: "cochl-",
    meaning: "shell",
    origin: "Greek",
    etymology: "κόχλος (kochlos)",
    examples: "cochlea"
  },
  {
    root: "coel-",
    meaning: "hollow",
    origin: "Greek",
    etymology: "κοῖλος (koilos)",
    examples: "blastocoel, coelom, spongocoel"
  },
  {
    root: "cogn-",
    meaning: "know",
    origin: "Latin",
    etymology: "cognoscere",
    examples: "cognitive, cognizant, recognize"
  },
  {
    root: "col-",
    meaning: "strain",
    origin: "Latin",
    etymology: "colare, colum",
    examples: "colander"
  },
  { root: "coll-", meaning: "hill", origin: "Latin", etymology: "collis" },
  {
    root: "coll-",
    meaning: "neck",
    origin: "Latin",
    etymology: "collum",
    examples: "collar"
  },
  {
    root: "color-",
    meaning: "color",
    origin: "Latin",
    etymology: "color",
    examples: "coloration, coloratura, tricolor"
  },
  {
    root: "con-, co-, col-, com-, cor-",
    meaning: "with, together",
    origin: "Latin",
    etymology: "cum",
    examples: "coagulate, collide, compress, connect, contain, corrode"
  },
  {
    root: "con-",
    meaning: "cone",
    origin: "Greek",
    etymology: "κῶνος (kōnos)",
    examples: "conic, conical, conoid"
  },
  {
    root: "condi-",
    meaning: "season",
    origin: "Latin",
    etymology: "condire",
    examples: "condiment"
  },
  {
    root: "contra-",
    meaning: "against",
    origin: "Latin",
    etymology: "contra",
    examples: "contradiction, contrast"
  },
  {
    root: "copr-",
    meaning: "dung",
    origin: "Greek",
    etymology: "κόπρος (kopros)",
    examples: "coprolite, coprophagia, coprophilia"
  },
  {
    root: "corac-",
    meaning: "raven",
    origin: "Greek",
    etymology: "κόραξ, κόρακος (korax, korakos)",
    examples: "coracoid"
  },
  {
    root: "cord-",
    meaning: "heart",
    origin: "Latin",
    etymology: "cor, cordis",
    examples: "accord, cordial"
  },
  {
    root: "corn-",
    meaning: "horn",
    origin: "Latin",
    etymology: "cornu",
    examples: "cornea, cornucopia, unicorn"
  },
  {
    root: "coron-",
    meaning: "crown",
    origin: "Latin",
    etymology: "corona, coronare",
    examples: "corona, coronation"
  },
  {
    root: "corpor-",
    meaning: "body",
    origin: "Latin",
    etymology: "corpus, corporis",
    examples: "corporation, corpse, corpuscle"
  },
  {
    root: "cortic-",
    meaning: "bark",
    origin: "Latin",
    etymology: "cortex, corticis",
    examples: "corticosteriod"
  },
  {
    root: "cosm-",
    meaning: "universe",
    origin: "Greek",
    etymology: "κόσμος (kosmos)",
    examples: "cosmic, cosmonaut"
  },
  {
    root: "cosmet-",
    origin: "Greek",
    etymology: "κοσμητ- (kosmet-)",
    examples: "cosmetics, cosmetology"
  },
  {
    root: "cost-",
    meaning: "rib",
    origin: "Latin",
    etymology: "costa",
    examples: "costal"
  },
  {
    root: "cotyl-",
    meaning: "cup",
    origin: "Greek",
    etymology: "κοτύλη (kotulē)",
    examples: "cotyledon"
  },
  {
    root: "-cracy, -crat",
    meaning: "government, rule, authority",
    origin: "Greek",
    etymology: "κράτος (kratos)",
    examples: "democracy"
  },
  {
    root: "crani-",
    meaning: "skull",
    origin: "Greek",
    etymology: "κρανίον (kranion)",
    examples: "cranium"
  },
  {
    root: "crass-",
    meaning: "thick",
    origin: "Latin",
    etymology: "crassus",
    examples: "crassitude"
  },
  {
    root: "cre-",
    meaning: "make",
    origin: "Latin",
    etymology: "creare, creatus",
    examples: "creation, creature"
  },
  {
    root: "cred-",
    meaning: "believe, trust",
    origin: "Latin",
    etymology: "credere, creditus",
    examples: "credentials, credibility, creditor, incredible"
  },
  {
    root: "crep-",
    meaning: "boot, shoe",
    origin: "Greek",
    etymology: "κρηπίς, κρηπίδος (krēpis, krēpidos)"
  },
  {
    root: "cribr-",
    meaning: "sieve",
    origin: "Latin",
    etymology: "cribrum, cribrare",
    examples: "cribble, cribrate"
  },
  { meaning: "ring", origin: "Greek", etymology: "κρίκος (krikos)" },
  {
    root: "cris-, crit-",
    meaning: "judge",
    origin: "Greek",
    etymology: "κρίσις (crisis)",
    examples: "crisis, critic"
  },
  {
    root: "crisp-",
    meaning: "curled",
    origin: "Latin",
    etymology: "crispus",
    examples: "crispate"
  },
  {
    root: "crist-",
    meaning: "crest",
    origin: "Latin",
    etymology: "crista",
    examples: "cristate"
  },
  {
    root: "cross-",
    meaning: "fringe, tassel",
    origin: "Greek",
    etymology: "κροσσός (krossos)"
  },
  {
    root: "cruc-",
    meaning: "cross",
    origin: "Latin",
    etymology: "crux, crucis",
    examples: "crucial, crucifix, crucify, excruciating"
  },
  {
    root: "crur-",
    meaning: "leg, shank",
    origin: "Latin",
    etymology: "crus, cruris",
    examples: "crural"
  },
  {
    root: "crypt-",
    meaning: "hidden",
    origin: "Greek",
    etymology: "κρυπτός (kruptos)",
    examples: "cryptic, cryptography"
  },
  {
    root: "cten-",
    meaning: "comb",
    origin: "Greek",
    etymology: "κτείς, κτενός (kteis, ktenos)",
    examples: "ctenophore"
  },
  {
    root: "cub-",
    meaning: "cube",
    origin: "Greek",
    etymology: "κύβος (kubos)",
    examples: "cubic, cuboid"
  },
  {
    root: "cub-",
    meaning: "lie",
    origin: "Latin",
    etymology: "cubare",
    examples: "incubation, succuba"
  },
  {
    root: "culin-",
    meaning: "kitchen",
    origin: "Latin",
    etymology: "culina",
    examples: "culinary"
  },
  {
    root: "culp-",
    meaning: "blame, fault",
    origin: "Latin",
    etymology: "culpa",
    examples: "culpable, exculpate"
  },
  {
    root: "cune-",
    meaning: "wedge",
    origin: "Latin",
    etymology: "cuneus",
    examples: "cuneiform"
  },
  {
    root: "curr-, curs-",
    meaning: "run",
    origin: "Latin",
    etymology: "currere, cursus",
    examples: "concurrent, current, cursive, recursion"
  },
  {
    root: "curv-",
    meaning: "bent",
    origin: "Latin",
    etymology: "curvus",
    examples: "curvature"
  },
  {
    root: "cuspid-",
    meaning: "lance, point",
    origin: "Latin",
    etymology: "cuspis, cuspidis",
    examples: "bicuspid"
  },
  {
    root: "cut-",
    meaning: "skin",
    origin: "Latin",
    etymology: "cutis",
    examples: "cuticle"
  },
  {
    root: "cyan-",
    meaning: "blue",
    origin: "Greek",
    etymology: "κυανός (kuanos)",
    examples: "cyanide"
  },
  {
    root: "cycl-",
    meaning: "circular",
    origin: "Greek",
    etymology: "κύκλος (kuklos)",
    examples: "bicycle, cycle, cyclone"
  },
  {
    root: "cylind-",
    meaning: "roll",
    origin: "Greek",
    etymology: "κύλινδρος (kulindros)",
    examples: "cylinder"
  },
  {
    root: "cyn-",
    meaning: "dog",
    origin: "Greek",
    etymology: "κύων, κυνός (kuōn, kunos)",
    examples: "cynosure"
  },
  {
    root: "cyst-",
    meaning: "capsule",
    origin: "Greek",
    etymology: "κύστις (kustis)",
    examples: "cystic"
  },
  {
    root: "cyt-",
    meaning: "cell",
    origin: "Greek",
    etymology: "κύτος (kutos)",
    examples: "cytoplasm, cnidocyte"
  },
  {
    root: "dactyl-",
    meaning: "finger, toe, digit",
    origin: "Greek",
    etymology: "δάκτυλος (daktulos)",
    examples: "dactylology, pterodactyl"
  },
  {
    root: "damn-, -demn-",
    meaning: "to inflict loss upon",
    origin: "Latin",
    etymology: "damnāre",
    examples: "condemn, damnation"
  },
  {
    root: "de-",
    meaning: "from, away from, removing, down",
    origin: "Latin",
    etymology: "dē",
    examples: "deletion, dementia, descend"
  },
  {
    root: "deb-",
    meaning: "owe",
    origin: "Latin",
    etymology: "debere, debitus",
    examples: "debit"
  },
  {
    root: "deca-, dec-, deka-, dek-",
    meaning: "ten",
    origin: "Greek",
    etymology: "δέκα deka, ten",
    examples: "decagram, decahedron"
  },
  {
    root: "decim-",
    meaning: "tenth part",
    origin: "Latin",
    etymology: "decimus, tenth; from decem, ten",
    examples: "decimal, decimate"
  },
  {
    root: "delt-",
    origin: "Greek",
    etymology: "δέλτα (delta)",
    examples: "deltoid"
  },
  {
    root: "dem-",
    meaning: "people",
    origin: "Greek",
    etymology: "δῆμος (dēmos)",
    examples: "demagogue, democracy"
  },
  {
    root: "den-",
    meaning: "ten each",
    origin: "Latin",
    etymology: "deni",
    examples: "denarius, denary"
  },
  {
    root: "dendr-",
    meaning: "resembling a tree",
    origin: "Greek",
    etymology: 'δένδρον (dendron): akin to δρύς, drys, "tree"',
    examples: "dendrite, dendrochronology"
  },
  {
    root: "dens-",
    meaning: "thick",
    origin: "Latin",
    etymology: "densus",
    examples: "condense, density"
  },
  {
    root: "dent-",
    meaning: "tooth",
    origin: "Latin",
    etymology: "dens, dentis",
    examples: "dental, dentifrice, dentures"
  },
  {
    root: "derm-",
    meaning: "skin",
    origin: "Greek",
    etymology: "δέρμα (derma)",
    examples: "dermis, epidermis, hypodermic"
  },
  {
    root: "deuter-",
    meaning: "second",
    origin: "Greek",
    etymology: "δεύτερος (deuteros)",
    examples: "Deuteronomy, deuterostome"
  },
  {
    root: "dexter-",
    meaning: "right",
    origin: "Latin",
    etymology: "dexter",
    examples: "dexterity, dextrose"
  },
  {
    root: "dexi-",
    meaning: "right",
    origin: "Greek",
    etymology: "δεξιός, right",
    examples: "Dexiarchia"
  },
  {
    root: "di-",
    meaning: "two",
    origin: "Greek",
    etymology: "δι-",
    examples: "dicot, diode, dipole"
  },
  {
    root: "dia-",
    meaning: "apart, through",
    origin: "Greek",
    etymology: "διά (dia)",
    examples: "dialysis, diameter, diagram"
  },
  {
    root: "dict-",
    meaning: "say, speak",
    origin: "Latin",
    etymology: "dicere, dictus",
    examples: "contradict, dictate, dictation, dictionary, edict, predict"
  },
  {
    root: "digit-",
    meaning: "finger",
    origin: "Latin",
    etymology: "digitus",
    examples: "digital"
  },
  {
    root: "dino-",
    meaning: "terrible, fearfully great",
    origin: "Greek",
    etymology: "δεινός (deinos)",
    examples: "dinosaur"
  },
  {
    root: "dipl-",
    meaning: "double; twofold",
    origin: "Greek",
    etymology: "διπλός (diplos)",
    examples: "diploid, diplosis"
  },
  {
    root: "doc-, doct-",
    meaning: "teach",
    origin: "Latin",
    etymology: "docere, doctus",
    examples: "docile, doctor, indoctrinate"
  },
  {
    root: "dodec-",
    meaning: "twelve",
    origin: "Greek",
    etymology: "δώδεκα (dodeka)",
    examples: "dodecasyllabic"
  },
  {
    root: "dogmat-, dox-",
    meaning: "opinion, tenet",
    origin: "Greek",
    etymology: "δόξα",
    examples: "dogmatic, orthodox"
  },
  {
    root: "dom-",
    meaning: "house",
    origin: "Latin",
    etymology: "domus",
    examples: "dome"
  },
  {
    root: "don-",
    meaning: "give",
    origin: "Latin",
    etymology: "donare",
    examples: "condone, donation"
  },
  {
    root: "dorm-",
    meaning: "sleep",
    origin: "Latin",
    etymology: "dormire",
    examples: "dormant, dormitory"
  },
  {
    root: "dors-",
    meaning: "back",
    origin: "Latin",
    etymology: "dorsum",
    examples: "dorsal"
  },
  {
    root: "du-",
    meaning: "two",
    origin: "Latin",
    etymology: "duo",
    examples: "dual"
  },
  {
    root: "dub-",
    meaning: "doubtful",
    origin: "Latin",
    etymology: "dubius",
    examples: "dubious"
  },
  {
    root: "duc-, duct-",
    meaning: "lead",
    origin: "Latin",
    etymology: "dux, ducis",
    examples:
      "abduction, conductor, introduction, production, reduction, deduction"
  },
  {
    root: "dulc-",
    meaning: "sweet",
    origin: "Latin",
    etymology: "dulcis",
    examples: "dulcet"
  },
  {
    root: "dur-",
    meaning: "hard",
    origin: "Latin",
    etymology: "durus",
    examples: "durable, duration, duress, endure, obdurate"
  },
  {
    root: "dy-",
    meaning: "two",
    origin: "Greek",
    etymology: "δυο (duo)",
    examples: "dyad"
  },
  {
    root: "dynam-",
    meaning: "power",
    origin: "Greek",
    etymology: "δύναμη (dunamē)",
    examples: "dynamism, dynasty, dynamite"
  },
  {
    root: "dys-",
    meaning: "badly, ill",
    origin: "Greek",
    etymology: "δυσ-",
    examples: "dysentery, dysplasia, dystrophy"
  },
  {
    root: "ec-",
    meaning: "out",
    origin: "Greek",
    etymology: "ἐκ (ek)",
    examples: "eccentric"
  },
  {
    root: "eco-",
    meaning: "house",
    origin: "Greek",
    etymology: "οἶκος (oikos)",
    examples: "ecology, economics, ecumenism"
  },
  {
    root: "ecto-",
    meaning: "outside",
    origin: "Greek",
    etymology: "ἐκτός (ektos)",
    examples: "ectoderm"
  },
  {
    root: "ed-, es-",
    meaning: "eat",
    origin: "Latin",
    etymology: "edere, esus",
    examples: "edible"
  },
  {
    root: "ego-",
    meaning: "self, I (first person)",
    origin: "Latin, Greek",
    etymology: "ego, ἐγώ",
    examples: "egocentric"
  },
  {
    root: "ego-, eg-",
    meaning: "goat",
    origin: "Greek",
    etymology: "αἴξ (aix)",
    examples: "egophony"
  },
  {
    root: "em-, empt-",
    meaning: "buy",
    origin: "Latin",
    etymology: "emere, emptus",
    examples: "exemption, preempt, redeem"
  },
  {
    root: "eme-",
    meaning: "vomit",
    origin: "Greek",
    etymology: "ἔμετος (emetos)",
    examples: "emetic"
  },
  {
    root: "emul-",
    meaning: "striving to equal, rivaling",
    origin: "Latin",
    etymology: "aemulus, aemulare",
    examples: "emulator"
  },
  {
    root: "en-, em-",
    meaning: "in",
    origin: "Greek",
    etymology: "ἐν (en)",
    examples: "emphasis"
  },
  {
    root: "endo-",
    meaning: "inside",
    origin: "Greek",
    etymology: "ἔνδον (endon)",
    examples: "endocrine, endocytosis"
  },
  {
    root: "engy-",
    meaning: "narrow",
    origin: "Greek",
    etymology: "ἐγγύς (engys)"
  },
  {
    root: "ennea-",
    meaning: "nine",
    origin: "Greek",
    etymology: "ἐννέα (ennea)",
    examples: "ennead, enneagon"
  },
  { root: "ens-", meaning: "sword", origin: "Latin", etymology: "ensis" },
  {
    root: "eo-, eos-, eoso-",
    meaning: "dawn, east",
    origin: "Greek",
    etymology: "Ἠώς/Ἕως",
    examples: "Eocene"
  },
  {
    root: "ep-, epi-",
    meaning: "upon",
    origin: "Greek",
    etymology: "ἐπί (epi)",
    examples: "epicenter, epitaph, epoch"
  },
  {
    root: "epistem-",
    meaning: "knowledge or science",
    origin: "Greek",
    etymology: "ἐπιστήμη (epistēmē)",
    examples: "epistemic"
  },
  {
    root: "equ-, -iqu-",
    meaning: "even, level",
    origin: "Latin",
    etymology: "aequus",
    examples: "equal, equivalence"
  },
  {
    root: "equ-",
    meaning: "horse",
    origin: "Latin",
    etymology: "equus",
    examples: "equestrian"
  },
  {
    root: "erg-",
    meaning: "work",
    origin: "Greek",
    etymology: "έργον (ergon)",
    examples: "ergonomics"
  },
  {
    root: "err-",
    meaning: "stray",
    origin: "Latin",
    etymology: "errare",
    examples: "aberration, errant"
  },
  {
    root: "erythr-",
    meaning: "red",
    origin: "Greek",
    etymology: "ἐρυθρός (eruthros)",
    examples: "erythrocyte"
  },
  {
    root: "eso-",
    meaning: "within",
    origin: "Greek",
    etymology: "ἔσω (esō)",
    examples: "esoteric"
  },
  {
    root: "etho-, eth-, ethi-",
    meaning: "custom, habit",
    origin: "Greek",
    etymology: "ἦθος (ēthos)",
    examples: "ethology"
  },
  {
    root: "ethm-",
    meaning: "sieve",
    origin: "Greek",
    etymology: "ἠθμός (hethmos); ἤθειν (hethein)",
    examples: "ethmoid"
  },
  {
    root: "ethn-",
    meaning: "people, race, tribe, nation",
    origin: "Greek",
    etymology: "ἔθνος (ethnos)",
    examples: "ethnarch, ethnic"
  },
  {
    root: "etym-",
    meaning: true,
    origin: "Greek",
    etymology: "ἔτυμος (etumos)",
    examples: "etymology"
  },
  {
    root: "eu-",
    meaning: "well, good",
    origin: "Greek",
    etymology: "εὖ (eu)",
    examples: "euphoria, euthanasia"
  },
  {
    root: "eur-",
    meaning: "wide",
    origin: "Greek",
    etymology: "εὐρύς (eurus)",
    examples: "Europe"
  },
  {
    root: "ex-, e-, ef-",
    meaning: "from, out",
    origin: "Latin",
    etymology: "ex",
    examples: "exclude, extend, extrude"
  },
  {
    root: "exo-",
    meaning: "outside",
    origin: "Greek",
    etymology: "ἔξω (eksō)",
    examples: "exoskeleton, exothermic"
  },
  {
    root: "exter-, extra-",
    meaning: "outer",
    origin: "Latin",
    etymology: "externus",
    examples: "exterior"
  },
  {
    root: "extrem-",
    meaning: "outermost, utmost",
    origin: "Latin",
    etymology: "extremus",
    examples: "extremity, extremophile"
  },
  {
    root: "f-, fat-",
    meaning: "say, speak",
    origin: "Latin",
    etymology: "fari, fatus",
    examples: "fate, infant, preface"
  },
  {
    root: "fab-",
    meaning: "bean",
    origin: "Latin",
    etymology: "faba",
    examples: "faba bean"
  },
  {
    root: "fac-, -fic-, fact, -fect-",
    meaning: "make",
    origin: "Latin",
    etymology: "facere, factus",
    examples: "defect, factory, manufacture"
  },
  {
    root: "falc-",
    meaning: "sickle",
    origin: "Latin",
    etymology: "falx, falcis",
    examples: "falciform"
  },
  {
    root: "fall-, -fell-, fals-",
    meaning: "deceive",
    origin: "Latin",
    etymology: "fallere, falsus",
    examples: "falsity, infallibility"
  },
  {
    root: "fallac-",
    meaning: false,
    origin: "Latin",
    etymology: "fallax, fallacis",
    examples: "fallacy"
  },
  {
    root: "famili-",
    meaning: "a close attendant",
    origin: "Latin",
    etymology: "famulus",
    examples: "familiarity"
  },
  {
    root: "fant-",
    meaning: "to show",
    origin: "Greek",
    etymology: "φαντάζω",
    examples: "fantasy"
  },
  {
    root: "fasc-",
    meaning: "bundle",
    origin: "Latin",
    etymology: "fascis",
    examples: "fasciculation, fascism"
  },
  {
    root: "fatu-",
    meaning: "foolish, useless",
    origin: "Latin",
    etymology: "fatuus",
    examples: "fatuous, infatuation"
  },
  {
    root: "feder-",
    meaning: "treaty, agreement, contract, league, pact",
    origin: "Latin",
    etymology: "foedus, foederis",
    examples: "confederation, federal"
  },
  {
    root: "fel-",
    meaning: "cat",
    origin: "Latin",
    etymology: "feles, felis",
    examples: "Felinae, feline"
  },
  {
    root: "felic-",
    meaning: "happy, merry",
    origin: "Latin",
    etymology: "felix, felicis",
    examples: "felicity"
  },
  {
    root: "fell-",
    meaning: "suck",
    origin: "Latin",
    etymology: "fellare",
    examples: "fellation"
  },
  {
    root: "femin-",
    meaning: "women, female",
    origin: "Latin",
    etymology: "femina",
    examples: "femininity"
  },
  {
    root: "femor-",
    meaning: "thigh",
    origin: "Latin",
    etymology: "femur, femoris",
    examples: "femoral"
  },
  {
    root: "fend-, fens-",
    meaning: "strike",
    origin: "Latin",
    etymology: "fendere, -fensus",
    examples: "defend, offense"
  },
  {
    root: "fenestr-",
    meaning: "window",
    origin: "Latin",
    etymology: "fenestra",
    examples: "defenestration"
  },
  {
    root: "fer-",
    meaning: "carry",
    origin: "Latin",
    etymology: "ferre",
    examples: "reference, transfer"
  },
  {
    root: "feroc-",
    meaning: "fierce",
    origin: "Latin",
    etymology: "ferox, ferocis",
    examples: "ferocity"
  },
  {
    root: "ferr-",
    meaning: "iron",
    origin: "Latin",
    etymology: "ferrum",
    examples: "ferrous"
  },
  {
    root: "fet-",
    meaning: "stink",
    origin: "Latin",
    etymology: "fetere",
    examples: "fetid, fetor"
  },
  {
    root: "fic-",
    meaning: "fig",
    origin: "Latin",
    etymology: "ficus",
    examples: "Ficus"
  },
  {
    root: "fid-, fis-",
    meaning: "faith, trust",
    origin: "Latin",
    etymology: "fides, fidere, fisus",
    examples: "confidence, fidelity"
  },
  {
    root: "fil-",
    meaning: "thread",
    origin: "Latin",
    etymology: "filum",
    examples: "filament"
  },
  {
    root: "fili-",
    meaning: "son",
    origin: "Latin",
    etymology: "filius",
    examples: "affiliation"
  },
  {
    root: "fin-",
    meaning: "end",
    origin: "Latin",
    etymology: "finis",
    examples: "finish, final"
  },
  {
    root: "find-, fiss-",
    meaning: "split",
    origin: "Latin",
    etymology: "findere, fissus",
    examples: "fission, fissures"
  },
  {
    root: "firm-",
    meaning: "fix, settle",
    origin: "Latin",
    etymology: "firmus, firmare",
    examples: "confirmation, firmament"
  },
  {
    root: "fistul-",
    meaning: "hollow, tube",
    origin: "Latin",
    examples: "fistula"
  },
  {
    root: "fl-",
    meaning: "blow",
    origin: "Latin",
    etymology: "flare, flatus",
    examples: "flatulence, inflation, insufflation"
  },
  {
    root: "flacc-",
    meaning: "flabby",
    origin: "Latin",
    etymology: "flaccus, flaccere",
    examples: "flaccid"
  },
  {
    root: "flav-",
    meaning: "yellow",
    origin: "Latin",
    etymology: "flavus",
    examples: "flavonoid"
  },
  {
    root: "flect-, flex-",
    meaning: "bend",
    origin: "Latin",
    etymology: "flectere, flexus",
    examples: "flexible, flexile, flexor, inflection"
  },
  {
    root: "flig-, flict-",
    meaning: "strike",
    origin: "Latin",
    etymology: "fligere, flictus",
    examples: "conflict, inflict"
  },
  {
    root: "flor-",
    meaning: "flower",
    origin: "Latin",
    etymology: "flos, floris",
    examples: "floral, florid"
  },
  {
    root: "flu-, flux-",
    meaning: "flow",
    origin: "Latin",
    etymology: "fluere, fluxus",
    examples: "effluent, fluency, influx"
  },
  {
    root: "foc-",
    meaning: "hearth",
    origin: "Latin",
    etymology: "focus",
    examples: "focal"
  },
  {
    root: "fod-, foss-",
    meaning: "dig",
    origin: "Latin",
    etymology: "fodere, fossus",
    examples: "fossil"
  },
  { root: "foen-", meaning: "hay", origin: "Latin", etymology: "fenuculum" },
  {
    root: "foli-",
    meaning: "leaf",
    origin: "Latin",
    etymology: "folium",
    examples: "defoliant"
  },
  {
    root: "font-",
    meaning: "spring",
    origin: "Latin",
    etymology: "fons, fontis",
    examples: "font, fontal, fontanelle"
  },
  {
    root: "for-",
    meaning: "bore, drill",
    origin: "Latin",
    etymology: "forare, foratus",
    examples: "foralite, foramen, foraminifer, perforation"
  },
  {
    root: "form-",
    meaning: "shape",
    origin: "Latin",
    etymology: "forma",
    examples: "conformity, deformity, formation, reformatory"
  },
  {
    root: "fornic-",
    meaning: "vault",
    origin: "Latin",
    etymology: "fornix, fornicis",
    examples: "fornication"
  },
  {
    root: "fort-",
    meaning: "strong",
    origin: "Latin",
    etymology: "fortis",
    examples: "fortification"
  },
  {
    root: "fove-",
    meaning: "shallow round depression",
    origin: "Latin",
    etymology: "fovea",
    examples: "fovea"
  },
  {
    root: "frang-, -fring-, fract-, frag-",
    meaning: "break",
    origin: "Latin",
    etymology: "frangere, fractus",
    examples: "fracture, fragment, frangible, infringe"
  },
  {
    root: "frater-, fratr-",
    meaning: "brother",
    origin: "Latin",
    etymology: "frater",
    examples: "fraternity"
  },
  {
    root: "fric-, frict-",
    meaning: "rub",
    origin: "Latin",
    etymology: "fricare, frictus",
    examples: "dentifrice, friction"
  },
  {
    root: "frig-",
    meaning: "cold",
    origin: "Latin",
    etymology: "frigere",
    examples: "frigid, frigorific"
  },
  {
    root: "front-",
    meaning: "forehead",
    origin: "Latin",
    etymology: "frons, frontis",
    examples: "confront, frontage, frontal"
  },
  {
    root: "fruct-, frug-",
    meaning: "fruit",
    origin: "Latin",
    etymology: "frux, fructis",
    examples: "fructose"
  },
  {
    root: "fug-, fugit-",
    meaning: "flee",
    origin: "Latin",
    etymology: "fugere",
    examples: "centrifuge, fugitive, refuge"
  },
  {
    root: "fum-",
    meaning: "smoke",
    origin: "Latin",
    etymology: "fumus",
    examples: "fume, fumigation"
  },
  {
    root: "fund-",
    meaning: "bottom",
    origin: "Latin",
    etymology: "fundus, fundare",
    examples: "fundamentalism, profundity"
  },
  {
    root: "fund-, fus-",
    meaning: "pour",
    origin: "Latin",
    etymology: "fundere, fusus",
    examples:
      "diffusion, effusion, fusion, profuse, profusion, transfusion, effusive"
  },
  {
    root: "fung-, funct-",
    meaning: "do",
    origin: "Latin",
    etymology: "fungi, functus",
    examples: "function, fungibility"
  },
  {
    root: "fur-, furt-",
    meaning: "steal",
    origin: "Latin",
    etymology: "fur, furare",
    examples: "furtive"
  },
  {
    root: "furc-",
    meaning: "fork",
    origin: "Latin",
    etymology: "furca",
    examples: "bifurcation"
  },
  {
    root: "fusc-",
    meaning: "dark",
    origin: "Latin",
    etymology: "fuscus",
    examples: "obfuscation"
  },
  {
    root: "galact-",
    meaning: "milk",
    origin: "Greek",
    etymology: "γάλα, γαλακτός (gala, galaktos)",
    examples: "galactic"
  },
  {
    root: "gastr-",
    meaning: "stomach",
    origin: "Greek",
    etymology: "γαστήρ (gaster)",
    examples: "gastric, gastroenterology"
  },
  {
    root: "geo-",
    meaning: "earth",
    origin: "Greek",
    etymology: "γῆ (gē), γεω- (geō-)",
    examples: "geography, geology, geometry"
  },
  {
    root: "gel-",
    meaning: "icy cold",
    origin: "Latin",
    etymology: "gelum",
    examples: "gelatin, gelid"
  },
  {
    root: "gen-",
    meaning: "race, kind,birth",
    origin: "Greek",
    etymology: "γένος (genos)",
    examples: "eugenics, genocide"
  },
  {
    root: "ger-, gest-",
    meaning: "bear, carry",
    origin: "Latin",
    etymology: "gerere, gestus",
    examples: "digest, gestation"
  },
  {
    root: "germin-",
    meaning: "sprout",
    origin: "Latin",
    etymology: "germen, germinis",
    examples: "germination"
  },
  {
    root: "glabr-",
    meaning: "hairless",
    origin: "Latin",
    etymology: "glaber",
    examples: "glabrous"
  },
  {
    root: "glaci-",
    meaning: "ice",
    origin: "Latin",
    etymology: "glacies",
    examples: "glacier"
  },
  {
    root: "gladi-",
    meaning: "sword",
    origin: "Latin",
    etymology: "gladius",
    examples: "gladiator"
  },
  {
    root: "glia-",
    meaning: "glue",
    origin: "Greek",
    etymology: "γλία (glia)",
    examples: "glial"
  },
  {
    root: "glob-",
    meaning: "sphere",
    origin: "Latin",
    etymology: "globus",
    examples: "global, globule"
  },
  {
    root: "glori-",
    meaning: "glory",
    origin: "Latin",
    etymology: "gloria",
    examples: "glorify"
  },
  {
    root: "glutin-",
    meaning: "glue",
    origin: "Latin",
    etymology: "gluten, glutinis",
    examples: "agglutination"
  },
  {
    root: "grad-, -gred-, gress-",
    meaning: "walk, step, go",
    origin: "Latin",
    etymology: "gradus, gradere, gressus",
    examples: "grade, regress"
  },
  {
    root: "gram-",
    meaning: "writing",
    origin: "Greek",
    etymology: "γράμμα (gramma)",
    examples: "grammar, grammatic"
  },
  {
    root: "gran-",
    meaning: "grain",
    origin: "Latin",
    etymology: "granum",
    examples: "granary, granite, granola, granule"
  },
  {
    root: "grand-",
    meaning: "grand",
    origin: "Latin",
    etymology: "grandis",
    examples: "grandiloquous, grandiosity"
  },
  {
    root: "graph-",
    meaning: "draw, write",
    origin: "Greek",
    etymology: "γραφή (graphē)",
    examples: "grapheme, graphic, graphology"
  },
  {
    root: "grat-",
    meaning: "thank, please",
    origin: "Latin",
    etymology: "gratus",
    examples: "gratitude, ingrate"
  },
  {
    root: "grav-",
    meaning: "heavy",
    origin: "Latin",
    etymology: "gravis",
    examples: "aggravation, grave, gravity"
  },
  {
    root: "greg-",
    meaning: "flock",
    origin: "Latin",
    etymology: "grex, gregis",
    examples: "egregious, gregarious, segregation"
  },
  {
    root: "gubern-",
    meaning: "govern, pilot",
    origin: "Latin",
    etymology: "gubernare",
    examples: "gubernatorial"
  },
  {
    root: "gust-",
    meaning: "taste",
    origin: "Latin",
    etymology: "gustus",
    examples: "disgust, gusto"
  },
  {
    root: "gutt-",
    meaning: "drop",
    origin: "Latin",
    etymology: "gutta",
    examples: "gutta, guttifer, guttiform"
  },
  {
    root: "guttur-",
    meaning: "throat",
    origin: "Latin",
    etymology: "guttur",
    examples: "guttural"
  },
  {
    root: "gymn-",
    meaning: "nude",
    origin: "Greek",
    etymology: "γυμνός (gymnos)",
    examples: "gymnasium, gymnastics, gymnosperm"
  },
  {
    root: "gyn-",
    meaning: "woman",
    origin: "Greek",
    etymology: "γυνή",
    examples: "gynecology"
  },
  {
    root: "hab-, -hib-, habit-,-hibit-",
    meaning: "have",
    origin: "Latin",
    etymology: "habere, habitus",
    examples: "habit, prohibition"
  },
  {
    root: "haem-, hem-",
    meaning: "blood",
    origin: "Greek",
    etymology: "αἷμα (haima)",
    examples: "haemophilia, hemoglobin"
  },
  {
    root: "hal-",
    meaning: "salt",
    origin: "Greek",
    etymology: "ἅλς, ἁλός (hals, halos)",
    examples: "halogen"
  },
  {
    root: "hal-, -hel-",
    meaning: "breathe",
    origin: "Latin",
    etymology: "halare, halatus",
    examples: "anhelation, inhale"
  },
  {
    root: "hapl-",
    meaning: "simple, single",
    origin: "Greek",
    etymology: "ἁπλοῦς (haplous)",
    examples: "haploid, haplotype"
  },
  {
    root: "haur-, haust-",
    meaning: "draw",
    origin: "Latin",
    etymology: "haurire, haustus",
    examples: "exhaustion"
  },
  {
    root: "heli-",
    meaning: "sun",
    origin: "Greek",
    etymology: "ἥλιος (hēlios)",
    examples: "heliocentric, heliotrope, helium"
  },
  {
    root: "hemi-",
    meaning: "half",
    origin: "Greek",
    etymology: "ἥμισυς (hēmisus)",
    examples: "hemicycle, hemisphere"
  },
  {
    root: "hen-",
    meaning: "one",
    origin: "Greek",
    etymology: "ἕν (hen)",
    examples: "henad, hyphen"
  },
  {
    root: "hendec-",
    meaning: "eleven",
    origin: "Greek",
    etymology: "ἕνδεκα (hendeka)",
    examples: "hendecagon"
  },
  {
    root: "hept-",
    meaning: "seven",
    origin: "Greek",
    etymology: "ἑπτά (hepta)",
    examples: "heptagon, heptathlon, heptode"
  },
  {
    root: "her-, hes-",
    meaning: "cling",
    origin: "Latin",
    etymology: "haerere, haesus",
    examples: "adhesive, coherent"
  },
  {
    root: "herb-",
    meaning: "grass",
    origin: "Latin",
    etymology: "herba",
    examples: "herbal, herbicide"
  },
  {
    root: "hered-",
    meaning: "heir",
    origin: "Latin",
    etymology: "heres, heredis",
    examples: "heredity"
  },
  {
    root: "herp-",
    meaning: "creep",
    origin: "Greek",
    etymology: "ἕρπω, ἕρπειν (herpō, herpein)",
    examples: "herpes, herpetology"
  },
  {
    root: "heter-",
    meaning: "different, other",
    origin: "Greek",
    etymology: "ἕτερος (heteros)",
    examples: "heterodoxy"
  },
  {
    root: "heur-",
    meaning: "find",
    origin: "Greek",
    etymology: "εὑρίσκω (heuriskō)",
    examples: "heuristic"
  },
  {
    root: "hex-",
    meaning: "six",
    origin: "Greek",
    etymology: "ἕξ (hex)",
    examples: "hexagon, hexahedron, hexode"
  },
  {
    root: "hibern-",
    meaning: "wintry",
    origin: "Latin",
    etymology: "hibernus",
    examples: "hibernation"
  },
  {
    root: "hiem-",
    meaning: "winter",
    origin: "Latin",
    etymology: "hiems",
    examples: "hiemal"
  },
  {
    root: "hipp-",
    meaning: "horse",
    origin: "Greek",
    etymology: "ἵππος (hippos)",
    examples: "hippodrome"
  },
  {
    root: "hirsut-",
    meaning: "hairy",
    origin: "Latin",
    etymology: "hirtus, hirsutus",
    examples: "hirsute"
  },
  {
    root: "hispid-",
    meaning: "bristly",
    origin: "Latin",
    etymology: "hispidus",
    examples: "hispidity, hispidulous"
  },
  {
    root: "histri-",
    meaning: "actor",
    origin: "Latin",
    etymology: "histrio, histrionis",
    examples: "histrionic"
  },
  {
    root: "hod-",
    meaning: "way",
    origin: "Greek",
    etymology: "ὁδός (hodos)",
    examples: "cathode, herpolhode, hodometer"
  },
  {
    root: "hol-",
    meaning: "whole",
    origin: "Greek",
    etymology: "ὅλος (holos)",
    examples: "holistic"
  },
  {
    root: "hom-",
    meaning: "same",
    origin: "Greek",
    etymology: "ὁμός (homos)",
    examples: "homophone, homosexual"
  },
  {
    root: "home-",
    meaning: "like",
    origin: "Greek",
    etymology: "ὅμοιος (homoios)",
    examples: "homeostasis"
  },
  {
    root: "homin-",
    meaning: "human",
    origin: "Latin",
    etymology: "homo, hominis",
    examples: "hominid"
  },
  {
    root: "homal-",
    meaning: "even, flat",
    origin: "Greek",
    etymology: "ὁμαλός (homalos)",
    examples: "anomalous"
  },
  {
    root: "honor-",
    meaning: "esteem",
    origin: "Latin",
    etymology: "honos, honoris",
    examples: "honorable, honorarium"
  },
  {
    root: "hor-",
    meaning: "boundary",
    origin: "Greek",
    etymology: "ὅρος (horos)",
    examples: "aphorism, horizon"
  },
  {
    root: "hor-",
    meaning: "hour",
    origin: "Greek",
    etymology: "ὥρα (hōra)",
    examples: "horoscope"
  },
  {
    root: "horm-",
    meaning: "that which excites",
    origin: "Greek",
    etymology: "ὁρμή (hormē)",
    examples: "hormone"
  },
  {
    root: "hort-",
    meaning: "garden",
    origin: "Latin",
    etymology: "hortus, horti",
    examples: "horticulture"
  },
  {
    root: "hospit-",
    meaning: "host",
    origin: "Latin",
    etymology: "hospes, hospitis",
    examples: "hospital, hospitality, inhospitable"
  },
  {
    root: "host-",
    meaning: "enemy",
    origin: "Latin",
    etymology: "hostis",
    examples: "hostile"
  },
  {
    root: "hum-",
    meaning: "ground",
    origin: "Latin",
    etymology: "humus, humare",
    examples: "exhumation, inhume"
  },
  {
    root: "hyal-",
    meaning: "glass",
    origin: "Greek",
    etymology: "ὕαλος (hualos)",
    examples: "hyaline, hyaloid"
  },
  {
    root: "hydr-",
    meaning: "water",
    origin: "Greek",
    etymology: "ὕδωρ (hudōr)",
    examples:
      "hydraulics, hydrology, hydrolysis, hydrophily, hydrophobia, hydroponic, hydrous"
  },
  {
    root: "hygr-",
    meaning: "wet",
    origin: "Greek",
    etymology: "ὑγρός (hugros)",
    examples: "hygrometer"
  },
  {
    root: "hyo-",
    meaning: "U-shaped",
    origin: "Greek",
    etymology: "ὑοειδής (huoeidēs)",
    examples: "hyoid"
  },
  {
    root: "hyp-",
    meaning: "under",
    origin: "Greek",
    etymology: "ὑπό (hupo)",
    examples: "hypothermia"
  },
  {
    root: "hyper-",
    meaning: "above, over",
    origin: "Greek",
    etymology: "ὑπέρ (huper)",
    examples: "hyperbole, hypertonic"
  },
  {
    root: "hypn-",
    meaning: "sleep",
    origin: "Greek",
    etymology: "ὕπνος (hupnos)",
    examples: "hypnosis"
  },
  {
    root: "hyster-",
    meaning: "later",
    origin: "Greek",
    etymology: "ὕστερος (husteros)",
    examples: "hysteresis"
  },
  {
    root: "ichthy-",
    meaning: "fish",
    origin: "Greek",
    etymology: "ἰχθύς (ichthus)",
    examples: "ichthyology"
  },
  {
    root: "icos-",
    meaning: "twenty",
    origin: "Greek",
    etymology: "εἴκοσι (eikosi)",
    examples: "icosagon, icosahedron"
  },
  {
    root: "id-",
    meaning: "shape",
    origin: "Greek",
    etymology: "εἶδος (eidos)",
    examples: "idol"
  },
  {
    root: "ide-",
    meaning: "idea; thought",
    origin: "Greek",
    etymology: "ιδέα (idea)",
    examples: "ideogram, ideology"
  },
  {
    root: "idi-",
    meaning: "personal",
    origin: "Greek",
    etymology: "ἴδιος (idios)",
    examples: "idiom, idiosyncrasy, idiot"
  },
  {
    root: "ign-",
    meaning: "fire",
    origin: "Latin",
    etymology: "ignis",
    examples: "igneous, ignition"
  },
  {
    root: "in- (1), im-",
    meaning: "in, on",
    origin: "Latin",
    etymology: "in",
    examples: "import, incur, intend, invite"
  },
  {
    root: "in- (2), il-, im-, ir-",
    meaning: "not, un- (negation)",
    origin: "Latin",
    etymology: "in-",
    examples: "illicit, impossible, inimical, irrational"
  },
  {
    root: "infra-",
    meaning: "below, under",
    origin: "Latin",
    etymology: "infra",
    examples: "infrastructure"
  },
  {
    root: "insul-",
    meaning: "island",
    origin: "Latin",
    etymology: "insula",
    examples: "insular, insulation"
  },
  {
    root: "inter-",
    meaning: "among, between",
    origin: "Latin",
    etymology: "inter (preposition)",
    examples: "intercollegiate, intermission, intersection"
  },
  {
    root: "intra-",
    meaning: "within",
    origin: "Latin",
    etymology: "intra",
    examples: "intramural"
  },
  {
    root: "irasc-, irat-",
    meaning: "be angry",
    origin: "Latin",
    etymology: "irasci",
    examples: "irascible, irate"
  },
  {
    root: "is-, iso-",
    meaning: "equal, the same",
    origin: "Greek",
    etymology: "ἴσος (isos)",
    examples: "isometric, isomorphic, isotropic"
  },
  {
    root: "iter-",
    meaning: "again",
    origin: "Latin",
    etymology: "iterum, iterare",
    examples: "iteration"
  },
  {
    root: "itiner-",
    meaning: "route, way",
    origin: "Latin",
    etymology: "iter, itineris – march, journey",
    examples: "itinerary"
  },
  {
    root: "jac-",
    meaning: "lie",
    origin: "Latin",
    etymology: 'jacēre "to be thrown"',
    examples: "adjacent"
  },
  {
    root: "jac- (originally IAC), -ject-",
    meaning: "cast, throw",
    origin: "Latin",
    etymology:
      'iacio, iacere, ieci, iectus – "to throw" (and cognates thereof)',
    examples: "eject, interject, ejaculate, trajectory"
  },
  {
    root: "janu-",
    meaning: "door",
    origin: "Latin",
    etymology: "janua",
    examples: "janitor"
  },
  {
    root: "joc-",
    meaning: "joke",
    origin: "Latin",
    etymology: "jocus",
    examples: "jocularity"
  },
  {
    root: "jug-",
    meaning: "yoke",
    origin: "Latin",
    etymology: "jugare, jugum",
    examples: "conjugal, subjugate"
  },
  {
    root: "jung-, junct-",
    meaning: "join",
    origin: "Latin",
    etymology: "jungere, junctus",
    examples: "conjunction, juncture"
  },
  {
    root: "junior-",
    meaning: "younger",
    origin: "Latin",
    etymology: "junior",
    examples: "juniority"
  },
  {
    root: "jus-, jur-, judic- (originally",
    meaning: "law, justice",
    origin: "Latin",
    etymology: "ius, iuris; iudex, iudicis",
    examples: "judge, jury, justice"
  },
  { root: "IVS)" },
  {
    root: "juv-, jut-",
    meaning: "help",
    origin: "Latin",
    etymology: "juvare, jutus",
    examples: "adjutant"
  },
  {
    root: "juven-",
    meaning: "young, youth",
    origin: "Latin",
    etymology: "juvenis",
    examples: "juvenile, rejuvenate"
  },
  {
    root: "juxta-",
    meaning: "beside, near",
    origin: "Latin",
    etymology: "juxta",
    examples: "juxtaposition"
  },
  {
    root: "kil(o)-",
    meaning: "thousand",
    origin: "Greek",
    etymology: "χίλιοι (chilioi)",
    examples: "kilobyte, kilogram, kilometer"
  },
  {
    root: "kine-",
    meaning: "movement, motion",
    origin: "Greek",
    etymology: "κινέω (kineo)",
    examples: "telekinesis, kinetic energy, kinesthetic"
  },
  {
    root: "klept-",
    meaning: "steal",
    origin: "Greek",
    etymology: "κλέπτης (kleptēs)",
    examples: "kleptomania"
  },
  {
    root: "kudo-",
    meaning: "glory",
    origin: "Greek",
    etymology: "κῦδος (kudos)",
    examples: "kudos"
  },
  {
    root: "lab-, laps-",
    meaning: "slide, slip",
    origin: "Latin",
    etymology: "labi, lapsus",
    examples: "elapse, relapse"
  },
  {
    root: "labi-",
    meaning: "lip",
    origin: "Latin",
    etymology: "labia, labiae",
    examples: "bilabial, labial"
  },
  {
    root: "labor-",
    meaning: "toil",
    origin: "Latin",
    etymology: "labor",
    examples: "collaboration, elaboration"
  },
  {
    root: "lacer-",
    meaning: "tear",
    origin: "Latin",
    etymology: "lacer",
    examples: "laceration"
  },
  {
    root: "lacrim-",
    meaning: "cry, tears",
    origin: "Latin",
    etymology: 'lacrima "tear"',
    examples: "lacrimal, lacrimous"
  },
  {
    root: "lact-",
    meaning: "milk",
    origin: "Latin",
    etymology: "lac, lactis, lactare",
    examples: "lactate, lactation, lactose"
  },
  {
    root: "lamin-",
    meaning: "layer, slice",
    origin: "Latin",
    etymology: "lamina",
    examples: "laminate, lamination"
  },
  {
    root: "lamp-",
    meaning: "shine",
    origin: "Greek",
    etymology: 'λαμπάς lampas "torch"',
    examples: "lamp"
  },
  {
    root: "lapid-",
    meaning: "stone",
    origin: "Latin",
    etymology: "lapis, lapidis",
    examples: "lapidary"
  },
  {
    root: "larg-",
    meaning: "large",
    origin: "Latin",
    etymology: "largus",
    examples: "enlargement"
  },
  {
    root: "larv-",
    meaning: "ghost, mask",
    origin: "Latin",
    etymology: "larva",
    examples: "larva, larvae, larval"
  },
  {
    root: "lat-",
    meaning: "broad, wide",
    origin: "Latin",
    etymology: "latus",
    examples: "latitude"
  },
  {
    root: "later-",
    meaning: "side",
    origin: "Latin",
    etymology: "latus, lateris",
    examples: "bilateral"
  },
  {
    root: "laud-, laus-",
    meaning: "praise",
    origin: "Latin",
    etymology: "laudere",
    examples: "laud"
  },
  {
    root: "lav-",
    meaning: "wash",
    origin: "Latin",
    etymology: "lavare",
    examples: "lavatory"
  },
  {
    root: "lax-",
    meaning: "not tense",
    origin: "Latin",
    etymology: "laxus, laxare",
    examples: "laxative, relaxation"
  },
  {
    root: "led-, les-",
    meaning: "hurt",
    origin: "Latin",
    etymology: "laedere, laesus",
    examples: "lesion"
  },
  {
    root: "leg-",
    meaning: "law",
    origin: "Latin",
    etymology: "lex, legis, legare",
    examples: "legal, legislative"
  },
  {
    root: "leg-",
    meaning: "send",
    origin: "Latin",
    etymology: "legare",
    examples: "relegate"
  },
  {
    root: "lei-",
    meaning: "smooth",
    origin: "Greek",
    etymology: "λείος leios",
    examples: "leiomyoma"
  },
  {
    root: "lekan-",
    meaning: "dish, pot",
    origin: "Greek",
    etymology: "λεκάνη lekane",
    examples: "lekane"
  },
  {
    root: "leni-",
    meaning: "gentle",
    origin: "Latin",
    etymology: "lenis, lenire",
    examples: "leniency"
  },
  {
    root: "leon-",
    meaning: "lion",
    origin: "Latin",
    etymology: "leo, leonis",
    examples: "Leo, leonine, Leopold"
  },
  {
    root: "lep-",
    meaning: "flake, scale",
    origin: "Greek",
    etymology: "λέπις lepis",
    examples: "Lepidoptera"
  },
  {
    root: "leps-",
    meaning: "grasp, seize",
    origin: "Greek",
    etymology: "λήψης lepsis",
    examples: "epilepsy"
  },
  {
    root: "leuc(o)-, leuk(o)-",
    meaning: "white",
    origin: "Greek",
    etymology: "λευκός leukos",
    examples: "leucocyte"
  },
  {
    root: "lev-",
    meaning: "lift, light",
    origin: "Latin",
    etymology: 'levis "light" (in weight), levare',
    examples: "elevator, levitation"
  },
  {
    root: "liber-",
    meaning: "free",
    origin: "Latin",
    etymology: "liber, liberare",
    examples: "liberation, liberty"
  },
  {
    root: "libr-",
    meaning: "book",
    origin: "Latin",
    etymology: "liber, libri",
    examples: "librarian, library"
  },
  {
    root: "lig-",
    meaning: "bind",
    origin: "Latin",
    etymology: "ligare, ligatus",
    examples: "ligament, ligature"
  },
  {
    root: "limac-",
    meaning: "slug",
    origin: "Latin",
    etymology: "limax, limacis",
    examples: "limacoid, limacon"
  },
  {
    root: "lin-",
    meaning: "line",
    origin: "Latin",
    etymology: "linea",
    examples: "line, linearity"
  },
  {
    root: "lingu-",
    meaning: "language, tongue",
    origin: "Latin",
    etymology: "lingua",
    examples: "bilingual, linguistic"
  },
  {
    root: "linqu-, lict-",
    meaning: "leave",
    origin: "Latin",
    etymology: "linquere, lictus",
    examples: "relict, relinquish"
  },
  {
    root: "lip-",
    meaning: "fat",
    origin: "Greek",
    etymology: "λίπος lipos",
    examples: "lipolysis"
  },
  {
    root: "liter-",
    meaning: "letter",
    origin: "Latin",
    etymology: "littera",
    examples: "alliteration, illiterate, literacy, literal, obliterate"
  },
  {
    root: "lith-",
    meaning: "stone",
    origin: "Greek",
    etymology: "λίθος (lithos)",
    examples: "lithosphere, megalith, monolith, Neolithic Era"
  },
  {
    root: "loc-",
    meaning: "place",
    origin: "Latin",
    etymology: "locus",
    examples: "local, location"
  },
  {
    root: "log-",
    meaning: "thought, word, speech",
    origin: "Greek",
    etymology: 'λόγος (logos) "word"',
    examples: "logic, monologue, morphological"
  },
  {
    root: "long-",
    meaning: "long",
    origin: "Latin",
    etymology: "longus",
    examples: "elongate, longitude"
  },
  {
    root: "loqu-, locut-",
    meaning: "speak",
    origin: "Latin",
    etymology: "loqui",
    examples: "allocution, eloquence"
  },
  {
    root: "luc-",
    meaning: "bright, light",
    origin: "Latin",
    etymology: "lux, lucis light",
    examples: "Lucifer (bearer of light)"
  },
  {
    root: "lud-, lus-",
    meaning: "play",
    origin: "Latin",
    etymology: "ludere, lusus",
    examples: "allude, illusion"
  },
  {
    root: "lumin-",
    meaning: "light",
    origin: "Latin",
    etymology: "lumen, luminis",
    examples: "illumination, luminous"
  },
  {
    root: "lun-",
    meaning: "moon",
    origin: "Latin",
    etymology: "luna",
    examples: "lunar, lunatic"
  },
  {
    root: "lysis",
    meaning: "dissolving",
    origin: "Greek",
    etymology: "λύσις (lusis)",
    examples: "analysis, cytolysis, hydrolysis"
  },
  {
    root: "macro-",
    meaning: "long",
    origin: "Greek",
    etymology: "μακρός (makros)",
    examples: "macron"
  },
  {
    root: "magn-",
    meaning: "great, large",
    origin: "Latin",
    etymology: "magnus",
    examples: "magnanimous, magnificent, magnitude"
  },
  {
    root: "maj-",
    meaning: "greater",
    origin: "Latin",
    etymology: "major, majus",
    examples: "majesty, majority, majuscule"
  },
  {
    root: "mal-",
    meaning: "bad, wretched,",
    origin: "Latin",
    etymology: "malus",
    examples: "malfeasance, malicious, malignancy, malodorous"
  },
  {
    root: "mamm-",
    meaning: "breast",
    origin: "Latin",
    etymology: "mamma",
    examples: "mammal, mammary gland"
  },
  {
    root: "man-",
    meaning: "flow",
    origin: "Latin",
    etymology: "mānāre, manatus",
    examples: "emanate, emanationism, immanant, immanation"
  },
  {
    root: "man-",
    meaning: "stay",
    origin: "Latin",
    etymology: "manēre, mansus",
    examples:
      "immanence, immanent, manse, permanence, permanent, remanence, remanent"
  },
  {
    root: "mand-",
    meaning: "hand",
    origin: "Latin",
    etymology: "mandāre, mandatus",
    examples: "mandate, remand"
  },
  {
    root: "mania",
    meaning: "mental illness",
    origin: "Greek",
    etymology: "μανία (manίā)",
    examples: "kleptomania, maniac"
  },
  {
    root: "manu-",
    meaning: "hand",
    origin: "Latin",
    etymology: "manus",
    examples: "manual, manuscript"
  },
  {
    root: "mar-",
    meaning: "sea",
    origin: "Latin",
    etymology: "mare, maris",
    examples: "marine, maritime"
  },
  {
    root: "mater-, matr-",
    meaning: "mother",
    origin: "Latin",
    etymology: "mater, matris",
    examples: "maternity, matriarch, matrix"
  },
  {
    root: "maxim-",
    meaning: "greatest",
    origin: "Latin",
    etymology: "maximus",
    examples: "maximum"
  },
  {
    root: "medi-,",
    meaning: "middle",
    origin: "Latin",
    etymology: "medius, mediare",
    examples: "median, medieval"
  },
  { root: "-midi-" },
  {
    root: "meg-",
    meaning: "great, large",
    origin: "Greek",
    etymology: "μέγας (megas)",
    examples: "megaphone"
  },
  {
    root: "mei-",
    meaning: "less",
    origin: "Greek",
    etymology: "μεῖον (meiōn)",
    examples: "meiosis"
  },
  {
    root: "melan-",
    meaning: "black, dark",
    origin: "Greek",
    etymology: "μέλας (melas)",
    examples: "Melanesia, melanoma"
  },
  {
    root: "melior-",
    meaning: "better",
    origin: "Latin",
    etymology: "melior",
    examples: "amelioration"
  },
  {
    root: "mell-",
    meaning: "honey",
    origin: "Latin",
    etymology: "mel, mellis",
    examples: "mellifluous"
  },
  {
    root: "memor-",
    meaning: "remember",
    origin: "Latin",
    etymology: "memor",
    examples: "memorial"
  },
  {
    root: "mening-",
    meaning: "membrane",
    origin: "Greek",
    etymology: "μήνιγξ (meninx)",
    examples: "meningitis"
  },
  {
    root: "men-",
    meaning: "month",
    origin: "Greek",
    etymology: "μήν (mēn)",
    examples: "menopause"
  },
  {
    root: "menstru-",
    meaning: "monthly",
    origin: "Latin",
    etymology: "menstruus",
    examples: "menstruation, menstrual"
  },
  {
    root: "mensur-",
    meaning: "measure",
    origin: "Latin",
    etymology: "mensura",
    examples: "commensurate"
  },
  {
    root: "ment-",
    meaning: "mind",
    origin: "Latin",
    etymology: "mens, mentis",
    examples: "demented, mentality"
  },
  {
    root: "mer-",
    meaning: "part",
    origin: "Greek",
    etymology: "μέρος (meros)",
    examples: "polymer"
  },
  {
    root: "merc-",
    meaning: "reward, wages, hire",
    origin: "Latin",
    etymology: "merx, mercis",
    examples: "mercantile, merchant"
  },
  {
    root: "merg-, mers-",
    meaning: "dip, plunge",
    origin: "Latin",
    etymology: "mergere",
    examples: "emerge, immersion"
  },
  {
    root: "mes-",
    meaning: "middle",
    origin: "Greek",
    etymology: "μέσος (mesos)",
    examples: "mesolithic, mesozoic"
  },
  {
    root: "meter-, metr-",
    meaning: "measure",
    origin: "Greek",
    etymology: "μέτρον (metron)",
    examples: "metric, thermometer"
  },
  {
    root: "meta-",
    meaning: "above, among, beyond",
    origin: "Greek",
    etymology: "μετά (meta)",
    examples: "metaphor, metaphysics"
  },
  {
    root: "mic-",
    meaning: "grain",
    origin: "Latin",
    etymology: "mica",
    examples: "micelle"
  },
  {
    root: "micr-",
    meaning: "small",
    origin: "Greek",
    etymology: "μικρός (mikros)",
    examples: "microphone, microscope"
  },
  {
    root: "migr-",
    meaning: "wander",
    origin: "Latin",
    etymology: "migrare",
    examples: "emigrant, migrate"
  },
  {
    root: "milit-",
    meaning: "soldier",
    origin: "Latin",
    etymology: "miles, militis",
    examples: "military, militia"
  },
  {
    root: "mill-",
    meaning: "thousand",
    origin: "Latin",
    etymology: "mille",
    examples: "millennium, million"
  },
  {
    root: "millen-",
    meaning: "thousand each",
    origin: "Latin",
    etymology: "milleni",
    examples: "millenary"
  },
  {
    root: "mim-",
    meaning: "repeat",
    origin: "Greek",
    etymology: "μίμος (mimos)",
    examples: "mime, mimic"
  },
  {
    root: "min-",
    meaning: "jut",
    origin: "Latin",
    etymology: "minere",
    examples: "prominent"
  },
  {
    root: "min-",
    meaning: "less, smaller",
    origin: "Latin",
    etymology: "minor, minus",
    examples: "minority, minuscule"
  },
  {
    root: "mir-",
    meaning: "wonder, amazement",
    origin: "Latin",
    etymology: "miror, mirari, miratus sum",
    examples: "admire, miracle, mirror"
  },
  {
    root: "mis-",
    meaning: "hate",
    origin: "Greek",
    etymology: "μῖσος (misos)",
    examples: "misandry, misogyny"
  },
  {
    root: "misce-, mixt-",
    meaning: "mix",
    origin: "Latin",
    etymology: "miscere, mixtus",
    examples: "miscellaneous, mixture"
  },
  {
    root: "mit-",
    meaning: "thread",
    origin: "Greek",
    etymology: "μίτος (mitos)",
    examples: "mitochondrion"
  },
  {
    root: "mitt-, miss-",
    meaning: "send",
    origin: "Latin",
    etymology: "mittere, missus",
    examples: "intermittent, missionary, transmission"
  },
  {
    root: "mne-",
    meaning: "memory",
    origin: "Greek",
    etymology: "μνήμη (mnēmē)",
    examples: "mnemonic"
  },
  {
    root: "mol-",
    meaning: "grind",
    origin: "Latin",
    etymology: "mola, molere, molitus",
    examples: "molar"
  },
  {
    root: "moll-",
    meaning: "soft",
    origin: "Latin",
    etymology: "mollis",
    examples: "emollient, mollify"
  },
  {
    root: "mon-",
    meaning: "one",
    origin: "Greek",
    etymology: "μόνος (monos)",
    examples: "monism, monolith, monotone"
  },
  {
    root: "monil-",
    meaning: "string of beads",
    origin: "Latin",
    etymology: "monile",
    examples: "Moniliformida"
  },
  {
    root: "mont-",
    meaning: "mountain",
    origin: "Latin",
    etymology: "mons, montis",
    examples: "Montana"
  },
  {
    root: "mord-",
    meaning: "bite",
    origin: "Latin",
    etymology: "mordere, morsus",
    examples: "mordacious, morsel, remorse"
  },
  {
    root: "morph-",
    meaning: "form, shape",
    origin: "Greek",
    etymology: "μορφή (morphē)",
    examples: "anthropomorphism, morpheme, morphology"
  },
  {
    root: "mort-",
    meaning: "death",
    origin: "Latin",
    etymology: "mors, mortis",
    examples: "immortal, mortality, mortuary"
  },
  {
    root: "mov-, mot-",
    meaning: "move, motion",
    origin: "Latin",
    etymology: "movere, motus",
    examples: "mobile, momentum, motor, move"
  },
  {
    root: "mulg-, muls-",
    meaning: "milk",
    origin: "Latin",
    etymology: "mulgere",
    examples: "emulsion"
  },
  {
    root: "mult-",
    meaning: "many, much",
    origin: "Latin",
    etymology: "multus",
    examples: "multiple, multiplex, multitude"
  },
  {
    root: "mur-",
    meaning: "wall",
    origin: "Latin",
    etymology: "murus, muri",
    examples: "immured, mural"
  },
  {
    root: "mus-",
    meaning: "thief",
    origin: "Latin",
    etymology: "mus, muris",
    examples: "mouse"
  },
  {
    root: "musc-",
    meaning: "fly",
    origin: "Latin",
    etymology: "musca, muscae",
    examples: "Muscicapidae, Muscidae"
  },
  {
    root: "mut-",
    meaning: "change",
    origin: "Latin",
    etymology: "mutare",
    examples: "mutation"
  },
  {
    root: "my-",
    meaning: "mouse",
    origin: "Greek",
    etymology: "μῦς (mus)",
    examples: "musophobia"
  },
  {
    root: "myri-",
    meaning: "countless, ten thousand",
    origin: "Greek",
    etymology: "μυρίος (murios)",
    examples: "myriad, myriapod"
  },
  {
    root: "myrmec-",
    meaning: "ant",
    origin: "Greek",
    etymology: "μύρμηξ (murmēx)",
    examples: "myrmecoid, Myrmidons"
  },
  {
    root: "myth-",
    meaning: "story",
    origin: "Greek",
    etymology: "μῦθος (muthos)",
    examples: "mythic, mythology"
  },
  {
    root: "myx-",
    meaning: "slime",
    origin: "Greek",
    etymology: "μύξα (muxa)",
    examples: "Myxini"
  },
  {
    root: "myz-",
    meaning: "suck",
    origin: "Greek",
    etymology: "μυζάω (muzaō)",
    examples: "Myzopoda"
  },
  { root: "nar-", meaning: "nostril", origin: "Latin", etymology: "naris" },
  {
    root: "narc-",
    meaning: "numb",
    origin: "Greek",
    etymology: "νάρκη (narkē)",
    examples: "narcosis, narcotic"
  },
  {
    root: "narr-",
    meaning: "tell",
    origin: "Latin",
    etymology: "narrare",
    examples: "narrative"
  },
  {
    root: "nas-",
    meaning: "nose",
    origin: "Latin",
    etymology: "nasus",
    examples: "nasal"
  },
  {
    root: "nasc-, nat-",
    meaning: "born",
    origin: "Latin",
    etymology: "nascere, natus",
    examples: "nascent, native"
  },
  {
    root: "naut-",
    meaning: "ship",
    origin: "Greek",
    etymology: "ναύτης (nautes)",
    examples: "Argonaut, astronaut"
  },
  {
    root: "nav-",
    meaning: "ship",
    origin: "Latin",
    etymology: "navis",
    examples: "naval"
  },
  {
    root: "ne-",
    meaning: "new",
    origin: "Greek",
    etymology: "νέος (neos)",
    examples: "neologism"
  },
  {
    root: "necr-",
    meaning: "dead",
    origin: "Greek",
    etymology: "νεκρός (nekros)",
    examples: "necrophobia"
  },
  {
    root: "nect-",
    meaning: "swimming",
    origin: "Greek",
    etymology: "νηκτός (nēktos)",
    examples: "nectopod"
  },
  {
    root: "nect-, nex-",
    meaning: "join, tie",
    origin: "Latin",
    etymology: "nectere, nexus",
    examples: "connect, connexion"
  },
  {
    root: "neg-",
    meaning: "say no",
    origin: "Latin",
    etymology: "negare",
    examples: "negative"
  },
  {
    root: "nema-",
    meaning: "hair",
    origin: "Greek",
    etymology: "νῆμα (nēma)",
    examples: "nematode"
  },
  {
    root: "nemor-",
    meaning: "grove, woods",
    origin: "Latin",
    etymology: "nemus, nemoris",
    examples: "nemoral"
  },
  {
    root: "nephr-",
    meaning: "kidney",
    origin: "Greek",
    etymology: "νεφρός (nephros)",
    examples: "nephritis"
  },
  {
    root: "nes-",
    meaning: "island",
    origin: "Greek",
    etymology: "νῆσος (nēsos)",
    examples: "Polynesia"
  },
  {
    root: "neur-",
    meaning: "nerve",
    origin: "Greek",
    etymology: "νευρών (neurōn)",
    examples: "neurology, neurosurgeon"
  },
  {
    root: "nict-",
    meaning: "wink",
    origin: "Latin",
    etymology: "nictari",
    examples: "nictation"
  },
  {
    root: "nigr-",
    meaning: "black",
    origin: "Latin",
    etymology: "niger",
    examples: "denigrate"
  },
  {
    root: "nihil-",
    meaning: "nothing",
    origin: "Latin",
    etymology: "nihilum",
    examples: "annihilation"
  },
  {
    root: "noct-",
    meaning: "night",
    origin: "Latin",
    etymology: "nox, noctis",
    examples: "noctambulist, nocturnal"
  },
  {
    root: "nod-",
    meaning: "knot",
    origin: "Latin",
    etymology: "nodus",
    examples: "node, nodule"
  },
  {
    root: "nom-",
    meaning: "arrangement, law",
    origin: "Greek",
    etymology: "νόμος (nomos)",
    examples: "autonomous, taxonomy"
  },
  {
    root: "nomad-",
    meaning: "those who let pasture herds",
    origin: "Greek",
    etymology: "νομάς, νομάδος (nomas, nomados)",
    examples: "nomadic"
  },
  {
    root: "nomin-",
    meaning: "name",
    origin: "Latin",
    etymology: "nomen, nominis",
    examples: "nomination"
  },
  {
    root: "non-",
    meaning: "not",
    origin: "Latin",
    etymology: "non",
    examples: "none"
  },
  {
    root: "non-",
    meaning: "ninth",
    origin: "Latin",
    etymology: "nonus",
    examples: "nonary"
  },
  {
    root: "nonagen-",
    meaning: "ninety each",
    origin: "Latin",
    etymology: "nonageni",
    examples: "nonagenary"
  },
  {
    root: "nonagesim-",
    meaning: "ninetieth",
    origin: "Latin",
    etymology: "nonagesimus",
    examples: "nonagesimal"
  },
  {
    root: "not-",
    meaning: "letter, note, paper",
    origin: "Latin",
    etymology: "notare",
    examples: "annotation, notable"
  },
  {
    root: "noth-",
    meaning: "spurious",
    origin: "Greek",
    etymology: "νόθος (nothos)",
    examples: "nothogenus"
  },
  {
    root: "noto-",
    meaning: "back, south",
    origin: "Greek",
    etymology: "νότος (notos)",
    examples: "notochord"
  },
  {
    root: "nov-",
    meaning: "nine",
    origin: "Latin",
    etymology: "novem",
    examples: "November, novennial"
  },
  {
    root: "nov-",
    meaning: "new",
    origin: "Latin",
    etymology: "novus",
    examples: "innovation, nova"
  },
  {
    root: "noven-",
    meaning: "nine each",
    origin: "Latin",
    etymology: "noveni",
    examples: "novenary"
  },
  {
    root: "novendec-",
    meaning: "nineteen",
    origin: "Latin",
    etymology: "novendecim"
  },
  {
    root: "nox-, noc-",
    meaning: "harmful",
    origin: "Latin",
    etymology: "noxa",
    examples: "noxious"
  },
  {
    root: "nu-",
    meaning: "nod",
    origin: "Latin",
    etymology: "nuere",
    examples: "innuendo"
  },
  {
    root: "nub-",
    meaning: "to marry, to wed",
    origin: "Latin",
    etymology: "nubes, nubis, nubere",
    examples: "connubial, nubile"
  },
  {
    root: "nuc-",
    meaning: "nut",
    origin: "Latin",
    etymology: "nux, nucis",
    examples: "nucleus"
  },
  {
    root: "nuch-",
    meaning: "back of neck",
    origin: "Latin",
    etymology: "nucha",
    examples: "nuchal cord"
  },
  {
    root: "nud-",
    meaning: "naked",
    origin: "Latin",
    etymology: "nudus",
    examples: "denude, nudity"
  },
  {
    root: "null-",
    meaning: "none",
    origin: "Latin",
    etymology: "nullus",
    examples: "nullify"
  },
  {
    root: "numer-",
    meaning: "number",
    origin: "Latin",
    etymology: "numerus",
    examples: "numeral"
  },
  {
    root: "nunci-",
    meaning: "announce",
    origin: "Latin",
    etymology: "nuntius",
    examples: "pronunciation"
  },
  { root: "nupti-", origin: "Latin", examples: "nuptial" },
  {
    root: "nutri-",
    meaning: "nourish",
    origin: "Latin",
    etymology: "nutrire",
    examples: "nutrient"
  },
  {
    root: "ob-, o-, oc-, of-, og-, op-, os-",
    meaning: "against",
    origin: "Latin",
    etymology: "ob",
    examples:
      "obstinate, obstreperous, occur, offend, omit, oppose, ostentatious"
  },
  {
    root: "oct-",
    meaning: "eight",
    origin: "Greek",
    etymology: "ὀκτώ (oktō)",
    examples: "octagon, octahedron, octode"
  },
  {
    root: "oct-",
    meaning: "eight",
    origin: "Latin",
    etymology: "octō",
    examples: "octangular, octennial, octovir"
  },
  {
    root: "octav-",
    meaning: "eighth",
    origin: "Latin",
    etymology: "octāvus",
    examples: "octaval"
  },
  {
    root: "octogen-",
    meaning: "eighty each",
    origin: "Latin",
    etymology: "octogeni",
    examples: "octogenary"
  },
  {
    root: "octogesim-",
    meaning: "eightieth",
    origin: "Latin",
    etymology: "octogesimus",
    examples: "octogesimal"
  },
  {
    root: "octon-",
    meaning: "eight each",
    origin: "Latin",
    etymology: "octoni",
    examples: "octonary"
  },
  {
    root: "ocul-",
    meaning: "eye",
    origin: "Latin",
    etymology: "oculus, oculare",
    examples: "ocular, oculus, ullage"
  },
  {
    root: "od-",
    meaning: "path, way",
    origin: "Greek",
    etymology: "ὁδός (hodos)",
    examples: "anode, diode, odometer, pentode, tetrode, triode"
  },
  {
    root: "od-",
    meaning: "hate",
    origin: "Latin",
    etymology: "odium",
    examples: "odious"
  },
  {
    root: "odont-",
    meaning: "tooth",
    origin: "Greek",
    etymology: "ὀδούς, ὀδόντος (odous, odontos)",
    examples: "odontology"
  },
  {
    root: "odor-",
    meaning: "fragrant",
    origin: "Latin",
    etymology: "odor",
    examples: "odorous"
  },
  {
    root: "oeco-",
    meaning: "house",
    origin: "Greek",
    etymology: "οἶκος (oikos)",
    examples: "ecology"
  },
  {
    root: "oed-",
    meaning: "swollen",
    origin: "Greek",
    etymology: "οἴδημα (oidēma)",
    examples: "oedema"
  },
  {
    root: "oen-",
    meaning: "wine",
    origin: "Greek",
    etymology: "οἶνος (oinos)",
    examples: "oenology"
  },
  {
    root: "oesophag-",
    meaning: "gullet",
    origin: "Greek",
    etymology: "οἰσοφάγος (oisophagos)",
    examples: "oesophagus"
  },
  {
    root: "ogdo-",
    meaning: "eighth",
    origin: "Greek",
    etymology: "ὄγδοος (ogdoos)",
    examples: "ogdoad"
  },
  {
    root: "-oid",
    meaning: "like",
    origin: "Greek",
    etymology: "-οειδής (-oeidēs)",
    examples: "asteroid, mucoid, organoid"
  },
  {
    root: "ole-",
    meaning: "oil",
    origin: "Latin",
    etymology: "oleum",
    examples: "oleosity"
  },
  {
    root: "olecran-",
    meaning: "skull of elbow",
    origin: "Latin from",
    etymology: "ὠλέκρανον (ōlekranon)",
    examples: "olecranon"
  },
  { origin: "Greek" },
  {
    root: "olig-",
    meaning: "few",
    origin: "Greek",
    etymology: "ὀλίγος (oligos)",
    examples: "oligarchy"
  },
  {
    root: "oliv-",
    meaning: "olive",
    origin: "Latin",
    etymology: "oliva",
    examples: "olivaceous, olivary, olivette"
  },
  {
    root: "-oma",
    meaning: "cancer",
    origin: "Greek",
    etymology: "-ωμα",
    examples: "melanoma"
  },
  {
    root: "omas-",
    meaning: "paunch",
    origin: "Latin",
    etymology: "omasum",
    examples: "omasum"
  },
  {
    root: "oment-",
    meaning: "fat skin",
    origin: "Latin",
    etymology: "omentum",
    examples: "omental"
  },
  {
    root: "omin-",
    meaning: "creepy",
    origin: "Latin",
    etymology: "omen, ominis",
    examples: "abominable, ominous"
  },
  {
    root: "omm-",
    meaning: "eye",
    origin: "Greek",
    etymology: "ὄμμα (omma)",
    examples: "ommatidium"
  },
  {
    root: "omni-",
    meaning: "all",
    origin: "Latin",
    etymology: "omnis",
    examples: "omnipotence, omnivore"
  },
  { root: "omo-", meaning: "shoulder", origin: "Latin" },
  {
    root: "omphal-",
    meaning: "navel",
    origin: "Greek",
    etymology: "ὀμφαλός (omphalos)",
    examples: "omphalectomy"
  },
  {
    root: "oner-",
    meaning: "burden",
    origin: "Latin",
    etymology: "onus, oneris",
    examples: "exonerate, onerous"
  },
  {
    root: "onom-",
    meaning: "name",
    origin: "Greek",
    etymology: "όνομα (onoma)",
    examples: "onomatopoeia"
  },
  {
    root: "ont-",
    meaning: "existing",
    origin: "Greek",
    etymology: "ὄντος (ontos)",
    examples: "ontogeny, ontology"
  },
  {
    root: "-onym",
    meaning: "name",
    origin: "Greek",
    etymology: "ὄνυμα (onuma)",
    examples: "antonym, pseudonym, synonym"
  },
  {
    root: "oo-",
    meaning: "egg",
    origin: "Greek",
    etymology: "(oion)",
    examples: "oocyte"
  },
  {
    root: "opac-",
    meaning: "shady",
    origin: "Latin",
    etymology: "opacus",
    examples: "opacity"
  },
  {
    root: "oper-",
    meaning: "work",
    origin: "Latin",
    etymology: "opus, operis",
    examples: "inoperable, opera"
  },
  {
    root: "opercul-",
    meaning: "little cover",
    origin: "Latin",
    etymology: "operculum"
  },
  {
    root: "ophi-",
    meaning: "snake",
    origin: "Greek",
    etymology: "ὄφις (ophis)",
    examples: "ophiophagy"
  },
  {
    root: "ophthalm-",
    meaning: "eye",
    origin: "Greek",
    etymology: "ὀφθαλμός (ophthalmos)",
    examples: "ophthalmology"
  },
  {
    root: "opisth-",
    meaning: "behind",
    origin: "Greek",
    etymology: "ὄπισθεν (opisthen)",
    examples: "opisthosoma, opsimath"
  },
  {
    root: "opoter-",
    meaning: "either",
    origin: "Greek",
    etymology: "ὁπότερος (hopoteros)"
  },
  {
    root: "opt-",
    meaning: "eye",
    origin: "Greek",
    etymology: "ὀπτός (optos)",
    examples: "optical"
  },
  {
    root: "opt-",
    meaning: "choose",
    origin: "Latin",
    etymology: "optare",
    examples: "adopt, optional"
  },
  {
    root: "optim-",
    meaning: "best",
    origin: "Latin",
    etymology: "optimus",
    examples: "optimum"
  },
  {
    root: "or-",
    meaning: "mouth",
    origin: "Latin",
    etymology: "os, oris",
    examples: "oral, orator"
  },
  {
    root: "orb-",
    meaning: "circle",
    origin: "Latin",
    etymology: "orbis",
    examples: "orbit"
  },
  {
    root: "orch-",
    meaning: "testicle",
    origin: "Greek",
    etymology: "ὄρχις (orchis)",
    examples: "orchid"
  },
  {
    root: "ordin-",
    meaning: "order",
    origin: "Latin",
    etymology: "ōrdō, ordinis",
    examples: "ordinal, ordinary"
  },
  {
    root: "organ-",
    meaning: "organ, instrument, tool",
    origin: "Greek",
    etymology: "ὄργανον (organon)",
    examples: "organism"
  },
  {
    root: "ori-, ort-",
    meaning: "eastern",
    origin: "Latin",
    etymology: "oriri, ortus",
    examples: "orient"
  },
  {
    root: "orn-",
    meaning: "decorate",
    origin: "Latin",
    etymology: "ōrnāre",
    examples: "adorn, ornament, ornate"
  },
  {
    root: "ornith-",
    meaning: "bird",
    origin: "Greek",
    etymology: "ὄρνις (ornis, ornithos)",
    examples: "ornithology"
  },
  {
    root: "orth-",
    meaning: "straight",
    origin: "Greek",
    etymology: "ὀρθός (orthos)",
    examples: "orthodontist, orthodoxy, orthosis"
  },
  {
    root: "oscill-",
    meaning: "swing",
    origin: "Latin",
    etymology: "oscillum",
    examples: "oscillation"
  },
  {
    root: "oss-",
    meaning: "bone",
    origin: "Latin",
    etymology: "os, ossis",
    examples: "ossification"
  },
  {
    root: "osteo-",
    meaning: "bone",
    origin: "Greek",
    etymology: "ὀστοῦν (ostoun)",
    examples: "osteoporosis"
  },
  {
    root: "osti-",
    meaning: "entrance",
    origin: "Latin",
    etymology: "ostium",
    examples: "ostiole"
  },
  {
    root: "ostrac-",
    meaning: "shell",
    origin: "Greek",
    etymology: "ὄστρακον (ostrakon)",
    examples: "ostracism"
  },
  {
    root: "ot-",
    meaning: "ear",
    origin: "Greek",
    etymology: "οὖς, ωτός (ous, ōtos)",
    examples: "otology"
  },
  {
    root: "ov-",
    meaning: "egg",
    origin: "Latin",
    etymology: "ovum",
    examples: "oval, ovary, ovule"
  },
  {
    root: "ovi-",
    meaning: "sheep",
    origin: "Latin",
    etymology: "ovis",
    examples: "ovine"
  },
  {
    root: "oxy-",
    meaning: "sharp, pointed",
    origin: "Greek",
    etymology: "ὀξύς (oxus)",
    examples: "oxygen, oxymoron"
  },
  {
    root: "pac-",
    meaning: "peace",
    origin: "Latin",
    etymology: "pax, pacis",
    examples: "pacifism"
  },
  {
    root: "pach-",
    meaning: "thick",
    origin: "Greek",
    etymology: "παχύς (pachus)",
    examples: "pachydermata, Pachypodium"
  },
  {
    root: "paed-",
    meaning: "child",
    origin: "Greek",
    etymology: "παῖς, παιδός (pais, paidos)",
    examples: "paediatric"
  },
  {
    root: "pagin-",
    meaning: "page",
    origin: "Latin",
    etymology: "pagina",
    examples: "pagination"
  },
  {
    root: "pal-",
    meaning: "stake",
    origin: "Latin",
    etymology: "palus",
    examples: "impalement, pale"
  },
  {
    root: "palae-, pale-",
    meaning: "ancient, old",
    origin: "Greek",
    etymology: "παλαιός (palaios)",
    examples: "paleontology"
  },
  {
    root: "palin-",
    meaning: "back",
    origin: "Greek",
    etymology: "πάλιν (palin)",
    examples: "palindrome"
  },
  {
    root: "pall-",
    meaning: "be pale",
    origin: "Latin",
    etymology: "pallere",
    examples: "pallid, pallor"
  },
  {
    root: "palli-",
    meaning: "mantle",
    origin: "Latin",
    etymology: "pallium",
    examples: "pallium"
  },
  {
    root: "palm-",
    meaning: "palm",
    origin: "Latin",
    etymology: "palma",
    examples: "palmate"
  },
  {
    root: "palustr-",
    meaning: "in marshes",
    origin: "Latin",
    etymology: "paluster",
    examples: "palustral"
  },
  {
    root: "pan-, pam-",
    meaning: "all",
    origin: "Greek",
    etymology: "πᾶς, παντός (pas, pantos)",
    examples: "pandemic"
  },
  {
    root: "pand-, pans-",
    meaning: "spread",
    origin: "Latin",
    etymology: "pandere, pansus",
    examples: "expand, expansion"
  },
  {
    root: "par(a)-",
    meaning: "beside, near",
    origin: "Greek",
    etymology: "παρά (para)",
    examples: "parallel, parameter"
  },
  {
    root: "pariet-",
    meaning: "wall",
    origin: "Latin",
    etymology: "paries, parietis",
    examples: "parietal"
  },
  {
    root: "part-",
    meaning: "part",
    origin: "Latin",
    etymology: "pars, partis",
    examples: "bipartite, partition"
  },
  {
    root: "parthen-",
    meaning: "maiden",
    origin: "Greek",
    etymology: "παρθένος (parthenos)",
    examples: "parthenogenesis"
  },
  {
    root: "parv-",
    meaning: "little",
    origin: "Latin",
    etymology: "parvus",
    examples: "parvovirus"
  },
  {
    root: "pasc-, past-",
    meaning: "feed",
    origin: "Latin",
    etymology: "pascere, pastus",
    examples: "pasture, repast"
  },
  {
    root: "pass-",
    meaning: "pace, step",
    origin: "Latin",
    etymology: "passus"
  },
  {
    root: "passer-",
    meaning: "sparrow",
    origin: "Latin",
    etymology: "passer",
    examples: "passeriform, passerine"
  },
  {
    root: "pat-",
    meaning: "be open",
    origin: "Latin",
    etymology: "patere",
    examples: "patent"
  },
  {
    root: "path-",
    meaning: "feel, hurt",
    origin: "Greek",
    etymology: "πάθος (pathos)",
    examples: "pathetic, pathology"
  },
  {
    root: "pati-, pass-",
    meaning: "suffer, feel, endure, permit",
    origin: "Latin",
    etymology: "pati, passus",
    examples: "passive, patience"
  },
  {
    root: "patr-",
    meaning: "father",
    origin: "Greek",
    etymology: "πατήρ, πατριά (patēr, patria)",
    examples: "patriarch"
  },
  {
    root: "patr-",
    meaning: "father",
    origin: "Latin",
    etymology: "pater, patris",
    examples: "patrilocal"
  },
  {
    root: "pauc-",
    meaning: "few",
    origin: "Latin",
    etymology: "paucus",
    examples: "paucal, pauciloquent, paucity"
  },
  { root: "pav-", origin: "Latin", etymology: "pavire", examples: "pavement" },
  {
    root: "pecc-",
    meaning: "sin",
    origin: "Latin",
    etymology: "peccare",
    examples: "impeccable"
  },
  {
    root: "pect-",
    meaning: "fixed",
    origin: "Greek",
    etymology: "πηκτός (pēktos)",
    examples: "pectic, pectin"
  },
  {
    root: "pector-",
    meaning: "chest",
    origin: "Latin",
    etymology: "pectus, pectoris",
    examples: "pectoral"
  },
  {
    root: "pecun-",
    meaning: "money",
    origin: "Latin",
    etymology: "pecunia",
    examples: "pecuniary"
  },
  {
    root: "ped-",
    meaning: "child",
    origin: "Greek",
    etymology: "παῖς, παιδός (pais, paidos)",
    examples: "pedagogy"
  },
  {
    root: "ped-",
    meaning: "foot",
    origin: "Latin",
    etymology: "pes, pedis",
    examples: "pedal, quadruped"
  },
  {
    root: "pejor-",
    meaning: "worse",
    origin: "Latin",
    etymology: "pejor",
    examples: "pejorative"
  },
  {
    root: "pell-, puls-",
    meaning: "drive",
    origin: "Latin",
    etymology: "pellere, pulsus",
    examples: "propellent, propulsor, repellent"
  },
  {
    root: "pen-",
    meaning: "almost",
    origin: "Latin",
    etymology: "paene",
    examples: "peninsula, penultimate, penumbra"
  },
  {
    root: "pend-, pens-",
    meaning: "hang",
    origin: "Latin",
    etymology: "pendere",
    examples: "suspend"
  },
  {
    root: "penn-, pinn-",
    meaning: "feather",
    origin: "Latin",
    etymology: "penna",
    examples: "pennate, pinnate"
  },
  {
    root: "pent-",
    meaning: "five",
    origin: "Greek",
    etymology: "πέντε (pente)",
    examples: "pentagon, pentode, pentagrid"
  },
  {
    root: "pentecost-",
    meaning: "fiftieth",
    origin: "Greek",
    etymology: "πεντηκοστός (pentēkostos)",
    examples: "pentecostalism"
  },
  {
    root: "pept-",
    meaning: "to digest",
    origin: "Greek",
    etymology: "πέσσειν, πεπτός (pessein, peptos)",
    examples: "peptic, peptide"
  },
  {
    root: "per-",
    meaning: "thoroughly, through",
    origin: "Latin",
    etymology: "per",
    examples: "perfection, permeate, persistence, pervade"
  },
  {
    root: "peran-",
    meaning: "across, beyond",
    origin: "Greek",
    etymology: "πέραν (peran)"
  },
  {
    root: "peri-",
    meaning: "around",
    origin: "Greek",
    etymology: "περί (peri)",
    examples: "perimeter, peripheral, periscope"
  },
  {
    root: "persic-",
    meaning: "peach",
    origin: "Greek",
    etymology: "περσικός (persikos)"
  },
  {
    root: "pessim-",
    meaning: "worst",
    origin: "Latin",
    etymology: "pessimus",
    examples: "pessimal"
  },
  {
    root: "pet-",
    meaning: "strive towards",
    origin: "Latin",
    etymology: "petere",
    examples: "appetite, competition"
  },
  {
    root: "petr-",
    meaning: "rock",
    origin: "Greek",
    etymology: "πέτρα (petra)",
    examples: "petroglyph"
  },
  {
    root: "phae-",
    meaning: "dark",
    origin: "Greek",
    etymology: "φαιός (phaios)",
    examples: "phaeomelanin"
  },
  {
    root: "phag-",
    meaning: "eat",
    origin: "Greek",
    etymology: "φαγεῖν (phagein)",
    examples: "sarcophagus"
  },
  {
    root: "phalang-",
    meaning: "close formation of troops, finger bones",
    origin: "Greek",
    etymology: "φάλαγξ, φάλαγγος (phalanx, phalangos)",
    examples: "phalanges"
  },
  {
    root: "phalar-",
    meaning: "having a patch of white",
    origin: "Greek",
    etymology: "[1] φάλαρος (phalāros)",
    examples: "phalarope"
  },
  {
    root: "pharmac-",
    meaning: "drug, medicine",
    origin: "Greek",
    etymology: "φάρμακον (pharmakon)",
    examples: "pharmacy"
  },
  {
    root: "phaner-",
    meaning: "visible",
    origin: "Greek",
    etymology: "φανερός (phaneros)",
    examples: "phanerozoic"
  },
  {
    root: "pher-",
    meaning: "bear, carry",
    origin: "Greek",
    etymology: "φέρω (pherō)",
    examples: "pheromone"
  },
  {
    root: "phil-, -phile",
    meaning: "love, friendship",
    origin: "Greek",
    etymology: "φιλέω (phileō, philia)",
    examples: "hydrophile, philosophy"
  },
  {
    root: "phleg-",
    meaning: "heat",
    origin: "Greek",
    etymology: "φλέγω (phlegō)",
    examples: "phlegm, phlegmatics"
  },
  {
    root: "phloe-",
    meaning: "tree bark",
    origin: "Greek",
    etymology: "φλοιός (phloios)",
    examples: "phlobaphene, phloem"
  },
  {
    root: "phob-",
    meaning: "fear",
    origin: "Greek",
    etymology: "φόβος (phobos)",
    examples: "hydrophobia"
  },
  {
    root: "phon-",
    meaning: "sound",
    origin: "Greek",
    etymology: "φωνή (phōnē)",
    examples: "homophone, microphone, phonograph"
  },
  {
    root: "phor-",
    meaning: "carry, bear",
    origin: "Greek",
    etymology: "φόρος (phoros)",
    examples: "metaphor"
  },
  {
    root: "phos-, phot-",
    meaning: "light",
    origin: "Greek",
    etymology: "φῶς, φωτός (phōs, phōtos)",
    examples: "phosphor, photograph"
  },
  {
    root: "phragm-",
    meaning: "fence",
    origin: "Greek",
    etymology: "φράγμα (phragma)",
    examples: "diaphragm"
  },
  {
    root: "phren-",
    meaning: "diaphragm, mind",
    origin: "Greek",
    etymology: "φρήν, φρενός (phrēn, phrenos)",
    examples: "phrenetic, schizophrenia"
  },
  {
    root: "phryn-",
    meaning: "toad, toad-like",
    origin: "Greek",
    etymology: "φρύνη (phrunē)",
    examples: "Phrynobatrachus"
  },
  {
    root: "phyl-",
    meaning: "tribe",
    origin: "Greek",
    etymology: "φύλον (phulon)",
    examples: "phylogenetics, phylum"
  },
  {
    root: "phyll-",
    meaning: "leaf",
    origin: "Greek",
    etymology: "φύλλον (phullon)",
    examples: "chlorophyll, phyllotaxis"
  },
  {
    root: "phys-",
    meaning: "nature",
    origin: "Greek",
    etymology: "φύσις (phusis)",
    examples: "physics"
  },
  {
    root: "physalid-",
    meaning: "bladder",
    origin: "Greek",
    etymology: "φυσαλ(λ)ίς (phusal(l)is)",
    examples: "physalis"
  },
  {
    root: "phyt-",
    meaning: "plant",
    origin: "Greek",
    etymology: "φυτόν (phuton)",
    examples: "neophyte, phytoplankton"
  },
  { root: "pic-", meaning: "pitch", origin: "Latin", etymology: "pix, picis" },
  {
    root: "pil-",
    meaning: "hair",
    origin: "Latin",
    etymology: "pilus",
    examples: "depilatory, epilator"
  },
  {
    root: "pin-",
    meaning: "drink",
    origin: "Greek",
    etymology: "πίνειν (pinein)",
    examples: "pinocytosis"
  },
  {
    root: "pin-",
    meaning: "pine",
    origin: "Latin",
    etymology: "pinus",
    examples: "pineal gland"
  },
  {
    root: "ping-, pict-",
    meaning: "paint",
    origin: "Latin",
    etymology: "pingere, pictus",
    examples: "depiction, picture"
  },
  {
    root: "pingu-",
    meaning: "fat",
    origin: "Latin",
    etymology: "pinguis",
    examples: "Pinguicula"
  },
  {
    root: "pir-",
    meaning: "pear",
    origin: "Latin",
    etymology: "pirus",
    examples: "piriformis muscle"
  },
  {
    root: "pisc-",
    meaning: "fish",
    origin: "Latin",
    etymology: "piscis",
    examples: "Pisces, piscivore"
  },
  { root: "pis-", meaning: "pea", origin: "Greek", etymology: "πίσος (pisos)" },
  {
    root: "plac-",
    meaning: "plate, tablet",
    origin: "Greek",
    etymology: "πλάξ, πλακός (plax, plakos)"
  },
  {
    root: "plac-",
    meaning: "calm",
    origin: "Latin",
    etymology: "placare, placatus",
    examples: "placate"
  },
  {
    root: "plac-, -plic-",
    meaning: "please",
    origin: "Latin",
    etymology: "placēre, placitus",
    examples: "placebo, placid"
  },
  {
    root: "plagi-",
    meaning: "oblique",
    origin: "Greek",
    etymology: "πλάγιος (plagios)",
    examples: "plagioclase"
  },
  {
    root: "plan-",
    meaning: "flat",
    origin: "Latin",
    etymology: "planus",
    examples: "explanation, planar, plane"
  },
  {
    root: "plang-, planct-",
    origin: "Latin",
    etymology: "plangere, planctus",
    examples: "plangent"
  },
  {
    root: "plas-",
    meaning: "mould",
    origin: "Greek",
    etymology: "πλάθω (plathō)",
    examples: "plasma, plastic"
  },
  {
    root: "platy-",
    meaning: "flat, broad",
    origin: "Greek",
    etymology: "πλατύς (platus)",
    examples: "platypus"
  },
  {
    root: "plaud-, -plod-, plaus-, -plos-",
    meaning: "approve, clap",
    origin: "Latin",
    etymology: "plaudere, plausus",
    examples: "applaud, applause, explosion, implode, plaudits, plausible"
  },
  {
    root: "ple-, plet-",
    meaning: "fill",
    origin: "Latin",
    etymology: "plere",
    examples: "complement, suppletion"
  },
  {
    root: "pleb-",
    meaning: "people",
    origin: "Latin",
    etymology: "plebs, plebis",
    examples: "plebian, plebs"
  },
  {
    root: "plec-",
    meaning: "interwoven",
    origin: "Greek",
    etymology: "πλέκω (plekō)",
    examples: "plectics, symplectomorphism"
  },
  {
    root: "plect-, plex-",
    meaning: "plait",
    origin: "Latin",
    etymology: "plectere, plexus",
    examples: "perplex"
  },
  {
    root: "plen-",
    meaning: "full",
    origin: "Latin",
    etymology: "plenus",
    examples: "plenary"
  },
  {
    root: "plesi-",
    meaning: "near",
    origin: "Greek",
    etymology: "πλησίος (plēsios)"
  },
  {
    root: "pleth-",
    meaning: "full",
    origin: "Greek",
    etymology: "πλῆθος (plēthos)",
    examples: "plethora"
  },
  {
    root: "pleur-",
    meaning: "side",
    origin: "Greek",
    etymology: "πλευρά (pleura)"
  },
  {
    root: "plic-",
    meaning: "fold",
    origin: "Latin",
    etymology: "plicare, plicatus",
    examples: "duplication, replicate"
  },
  {
    root: "plinth-",
    meaning: "brick",
    origin: "Greek",
    etymology: "πλίνθος (plinthos)"
  },
  { root: "plor-", origin: "Latin", etymology: "plorare", examples: "implore" },
  { root: "plu-", meaning: "rain", origin: "Latin", etymology: "pluere" },
  {
    root: "plum-",
    meaning: "feather",
    origin: "Latin",
    etymology: "pluma",
    examples: "plumage, plumate"
  },
  {
    root: "plumb-",
    meaning: "lead",
    origin: "Latin",
    etymology: "plumbum",
    examples: "plumber"
  },
  {
    root: "plur-",
    meaning: "more",
    origin: "Latin",
    etymology: "pluris",
    examples: "plural"
  },
  { root: "plurim-", meaning: "most", origin: "Latin", etymology: "plurimus" },
  {
    root: "plus-",
    meaning: "more",
    origin: "Latin",
    etymology: "plus",
    examples: "surplus"
  },
  {
    root: "plut-",
    meaning: "wealth",
    origin: "Greek",
    etymology: "πλοῦτος (ploutos)",
    examples: "plutocracy"
  },
  {
    root: "pluvi-",
    meaning: "rain",
    origin: "Latin",
    etymology: "pluvia",
    examples: "pluvial"
  },
  {
    root: "pneu-",
    meaning: "air, lung",
    origin: "Greek",
    etymology: "πνεῦμα (pneuma)",
    examples: "pneumatic"
  },
  {
    root: "pod-",
    meaning: "foot",
    origin: "Greek",
    etymology: "πούς, ποδός (pous, podos)",
    examples: "podiatry, tripod"
  },
  {
    root: "pogon-",
    meaning: "beard",
    origin: "Greek",
    etymology: "πώγων, πώγωνος (pōgōn, pōgōnos)",
    examples: "pogonotrophy"
  },
  {
    root: "poie-",
    meaning: "make",
    origin: "Greek",
    etymology: "ποιέω (poieō)",
    examples: "poiesis"
  },
  {
    root: "pol-",
    meaning: "pole",
    origin: "Greek",
    etymology: "πόλος (polos)",
    examples: "dipole, polar"
  },
  {
    root: "pole-, poli-",
    meaning: "city",
    origin: "Greek",
    etymology: "πόλις (polis)",
    examples: "metropolis, politics"
  },
  {
    root: "polem-",
    meaning: "war",
    origin: "Greek",
    etymology: "πόλεμος (polemos)",
    examples: "polemic"
  },
  {
    root: "poli-",
    meaning: "grey",
    origin: "Greek",
    etymology: "πολιός (polios)"
  },
  {
    root: "pollic-",
    meaning: "thumb",
    origin: "Latin",
    etymology: "pollex, pollicis"
  },
  {
    root: "pollin-",
    origin: "Latin",
    etymology: "pollen, pollinis",
    examples: "pollination"
  },
  {
    root: "poly-",
    meaning: "many",
    origin: "Greek",
    etymology: "πολύς (polus)",
    examples: "polygon"
  },
  {
    root: "pon-, posit-",
    meaning: "put",
    origin: "Latin",
    etymology: "ponere, positus",
    examples: "component, position, postpone"
  },
  {
    root: "ponder-",
    meaning: "weight",
    origin: "Latin",
    etymology: "pondus, ponderis",
    examples: "preponderance"
  },
  {
    root: "pont-",
    meaning: "bridge",
    origin: "Latin",
    etymology: "pons, pontis",
    examples: "pontoon"
  },
  {
    root: "popul-",
    meaning: "people",
    origin: "Latin",
    etymology: "populus, populare",
    examples: "population"
  },
  {
    root: "por-",
    meaning: "passage",
    origin: "Greek",
    etymology: "πόρος (poros)",
    examples: "pore"
  },
  {
    root: "porc-",
    meaning: "pig",
    origin: "Latin",
    etymology: "porcus",
    examples: "porcine, pork"
  },
  {
    root: "porphyr-",
    meaning: "purple",
    origin: "Greek",
    etymology: "πορφύρα (porphura)",
    examples: "porphyrin"
  },
  {
    root: "port-",
    meaning: "gate",
    origin: "Latin",
    etymology: "porta",
    examples: "portal"
  },
  {
    root: "port-",
    meaning: "carry",
    origin: "Latin",
    etymology: "portare, portatus",
    examples: "export, transportation"
  },
  {
    root: "post-",
    meaning: "after, behind",
    origin: "Latin",
    etymology: "post",
    examples: "posterior, postscript"
  },
  {
    root: "pot-",
    meaning: "drink",
    origin: "Latin",
    etymology: "potus, potare",
    examples: "potable"
  },
  {
    root: "potam-",
    meaning: "river",
    origin: "Greek",
    etymology: "ποταμός (potamos)",
    examples: "hippopotamus, Mesopotamia"
  },
  {
    root: "prasin-",
    meaning: "leek-green",
    origin: "Greek",
    etymology: "πράσινος (prasinos)",
    examples: "prasinous"
  },
  { root: "prat-", meaning: "meadow", origin: "Latin", etymology: "pratum" },
  {
    root: "prav-",
    meaning: "crooked",
    origin: "Latin",
    etymology: "pravus",
    examples: "depravity"
  },
  {
    root: "pre-",
    meaning: "before",
    origin: "Latin",
    etymology: "prae",
    examples: "previous"
  },
  {
    root: "prec-",
    meaning: "pray",
    origin: "Latin",
    etymology: "prex, precis, precāri",
    examples: "deprecation"
  },
  {
    root: "pred-",
    origin: "Latin",
    etymology: "praeda, praedari",
    examples: "predator"
  },
  {
    root: "prehend-, prend-, prehens-",
    meaning: "grasp",
    origin: "Latin",
    etymology: "prehendere, prehensus",
    examples: "comprehend"
  },
  {
    root: "prem-, -prim-, press-",
    meaning: "press",
    origin: "Latin",
    etymology: "premere, pressus",
    examples: "pressure"
  },
  {
    root: "presby-",
    meaning: "old",
    origin: "Greek",
    etymology: "πρέσβυς (presbus)",
    examples: "Presbyterianism"
  },
  {
    root: "preter-",
    meaning: "past",
    origin: "Latin",
    etymology: "praeter",
    examples: "preterite, pretermission"
  },
  {
    root: "preti-",
    meaning: "price",
    origin: "Latin",
    etymology: "pretium, pretiare"
  },
  {
    root: "prim-",
    meaning: "first",
    origin: "Latin",
    etymology: "primus",
    examples: "primary, primeval, primitive"
  },
  {
    root: "prior-",
    meaning: "former",
    origin: "Latin",
    etymology: "prior",
    examples: "priority"
  },
  {
    root: "priv(i)-",
    meaning: "separate",
    origin: "Latin",
    etymology: "privus, privare, privatus",
    examples: "deprivation, privilege"
  },
  {
    root: "pro-",
    meaning: "before, in front of",
    origin: "Greek",
    etymology: "πρό (pro)"
  },
  {
    root: "pro-",
    meaning: "for, forward",
    origin: "Latin",
    etymology: "pro",
    examples: "propulsion"
  },
  {
    root: "prob-",
    meaning: "try",
    origin: "Latin",
    etymology: "probus, probare",
    examples: "probation"
  },
  {
    root: "proct-",
    meaning: "anus",
    origin: "Greek",
    etymology: "πρωκτός (prōktos)",
    examples: "proctology"
  },
  {
    root: "propri-",
    meaning: "one's own, ownership",
    origin: "Latin",
    etymology: "proprietas",
    examples: "appropriate, property, propriety"
  },
  {
    root: "pros-",
    meaning: "forward",
    origin: "Greek",
    etymology: "πρός (pros)"
  },
  {
    root: "prot-",
    meaning: "first",
    origin: "Greek",
    etymology: "πρῶτος (prōtos)",
    examples: "protoplasm"
  },
  {
    root: "proxim-",
    meaning: "nearest",
    origin: "Latin",
    etymology: "proximus, proximare",
    examples: "approximate, proximity"
  },
  {
    root: "prun-",
    meaning: "plum",
    origin: "Latin",
    etymology: "prunus",
    examples: "prune"
  },
  {
    root: "psamma-",
    meaning: "sand",
    origin: "Greek",
    etymology: "ψάμμος (psammos)"
  },
  {
    root: "pseud-",
    meaning: false,
    origin: "Greek",
    etymology: "ψευδής (pseudēs)",
    examples: "pseudonym"
  },
  {
    root: "psil-",
    meaning: "bare",
    origin: "Greek",
    etymology: "ψιλός (psilos)",
    examples: "epsilon"
  },
  {
    root: "psych-",
    meaning: "mind",
    origin: "Greek",
    etymology: "ψυχή (psuchē)",
    examples: "psycho"
  },
  {
    root: "psychr-",
    meaning: "cold",
    origin: "Greek",
    etymology: "ψυχρός (psuchros)"
  },
  {
    root: "pter-",
    meaning: "wing, fern",
    origin: "Greek",
    etymology: "πτερόν (pteron)",
    examples: "helicopter"
  },
  {
    root: "pto-",
    meaning: "fall",
    origin: "Greek",
    etymology: "πτῶσις (ptōsis)",
    examples: "ptosis"
  },
  {
    root: "ptyal-",
    meaning: "saliva",
    origin: "Greek",
    etymology: "πτύον (ptuon)"
  },
  {
    root: "ptych-",
    meaning: "fold, layer",
    origin: "Greek",
    etymology: "πτύξ, πτυχή (ptuchē)",
    examples: "triptych"
  },
  {
    root: "pub-",
    meaning: "sexually mature",
    origin: "Latin",
    etymology: "pubes",
    examples: "pubescent, pubic"
  },
  {
    root: "public-",
    origin: "Latin",
    etymology: "publicus",
    examples: "publication"
  },
  { root: "pude-", origin: "Latin", etymology: "pudere", examples: "impudent" },
  {
    root: "pugn-",
    meaning: "fight",
    origin: "Latin",
    etymology: "pugna, pugnare",
    examples: "pugnacious, repugnant"
  },
  {
    root: "pulchr-",
    meaning: "beautiful",
    origin: "Latin",
    etymology: "pulcher, pulchri",
    examples: "pulchritude"
  },
  {
    root: "pulmon-",
    meaning: "lung",
    origin: "Latin",
    etymology: "pulmo, pulmonis",
    examples: "pulmonary"
  },
  {
    root: "pulver-",
    meaning: "dust",
    origin: "Latin",
    etymology: "pulvis, pulveris",
    examples: "pulverize"
  },
  {
    root: "pung-, punct-",
    meaning: "prick",
    origin: "Latin",
    etymology: "pungere, punctus",
    examples: "puncture, pungent"
  },
  {
    root: "puni-",
    meaning: "punish",
    origin: "Latin",
    etymology: "punire, punitus",
    examples: "impunity, punitive"
  },
  {
    root: "pup-",
    meaning: "doll",
    origin: "Latin",
    etymology: "pupa",
    examples: "pupa, puppet"
  },
  {
    root: "pur-",
    meaning: "pure",
    origin: "Latin",
    etymology: "purus",
    examples: "impurity, purify"
  },
  {
    root: "purg-",
    meaning: "cleanse",
    origin: "Latin",
    etymology: "purgare",
    examples: "expurgate, purgatory, purge"
  },
  { root: "purpur-", meaning: "purple", origin: "Latin", etymology: "purpura" },
  {
    root: "put-",
    meaning: "prune, reckon",
    origin: "Latin",
    etymology: "putāre",
    examples: "compute, putative"
  },
  {
    root: "pyg-",
    meaning: "rump",
    origin: "Greek",
    etymology: "πυγή (pugē)",
    examples: "pygostyle, callipygian"
  },
  {
    root: "pyl-",
    meaning: "gate",
    origin: "Greek",
    etymology: "πυλών, πυλῶνος (pulōn)",
    examples: "pylon"
  },
  {
    root: "pyr-",
    meaning: "heat, fire",
    origin: "Greek",
    etymology: "πῦρ, πυρός (pur, puros)",
    examples: "pyrolysis"
  },
  {
    root: "quadr-",
    meaning: "four",
    origin: "Latin",
    etymology: "quattuor",
    examples: "quadrangle, quadrillion"
  },
  {
    root: "quadragen-",
    meaning: "forty each",
    origin: "Latin",
    etymology: "quadrageni",
    examples: "quadragenary"
  },
  {
    root: "quadragesim-",
    meaning: "fortieth",
    origin: "Latin",
    etymology: "quadragesimus",
    examples: "quadragesimal"
  },
  {
    root: "quart-",
    meaning: "fourth",
    origin: "Latin",
    etymology: "quartus",
    examples: "quartary, quartile"
  },
  {
    root: "quasi-",
    meaning: "as if",
    origin: "Latin",
    etymology: "quasi",
    examples: "quasar"
  },
  {
    root: "quatern-",
    meaning: "four each",
    origin: "Latin",
    etymology: "quaterni",
    examples: "quaternary, quaternion"
  },
  {
    root: "quati-, quass-",
    meaning: "shake",
    origin: "Latin",
    etymology: "quatere"
  },
  {
    root: "quer-, -quir-, quesit-, -quisit-",
    meaning: "search, seek",
    origin: "Latin",
    etymology: "quaerere",
    examples: "Inquisition, query"
  },
  {
    root: "qui-",
    meaning: "rest",
    origin: "Latin",
    etymology: "quies",
    examples: "quiet, requiem"
  },
  {
    root: "quin-",
    meaning: "five each",
    origin: "Latin",
    etymology: "quini",
    examples: "quinary"
  },
  {
    root: "quindecim-",
    meaning: "fifteenth",
    origin: "Latin",
    etymology: "quindecimus",
    examples: "quindecimal"
  },
  {
    root: "quinden-",
    meaning: "fifteen each",
    origin: "Latin",
    etymology: "quindeni",
    examples: "quindenary"
  },
  {
    root: "quinque-",
    meaning: "five",
    origin: "Latin",
    etymology: "quinque",
    examples: "quinquennium"
  },
  {
    root: "quint-",
    meaning: "fifth",
    origin: "Latin",
    etymology: "quintus",
    examples: "quintary, quintile"
  },
  {
    root: "quot-",
    meaning: "how many, how great",
    origin: "Latin",
    examples: "quota, quotient"
  },
  {
    root: "rad-, ras-",
    meaning: "scrape, shave",
    origin: "Latin",
    etymology: "radere, rasus",
    examples: "abrade, abrasion, erasure"
  },
  {
    root: "radi-",
    meaning: "beam, spoke",
    origin: "Latin",
    etymology: "radius, radiare",
    examples: "radiance, radiation"
  },
  {
    root: "radic-",
    meaning: "root",
    origin: "Latin",
    etymology: "rādix, rādīcis",
    examples: "eradicate, radical"
  },
  {
    root: "ram-",
    meaning: "branch",
    origin: "Latin",
    etymology: "rāmus",
    examples: "ramification, ramose"
  },
  {
    root: "ran-",
    meaning: "frog",
    origin: "Latin",
    etymology: "rana",
    examples: "Rana"
  },
  {
    root: "ranc-",
    meaning: "rancidness, grudge, bitterness",
    origin: "Latin",
    etymology: "rancere",
    examples: "rancid, rancor"
  },
  {
    root: "rap-",
    meaning: "turnip",
    origin: "Latin",
    etymology: "rapum",
    examples: "rapeseed"
  },
  {
    root: "raph-",
    meaning: "seam",
    origin: "Greek",
    etymology: "ῤαφή (rhaphē)"
  },
  { root: "rar-", origin: "Latin", etymology: "rarus", examples: "rarity" },
  {
    root: "rauc-",
    meaning: "harsh, hoarse",
    origin: "Latin",
    etymology: "raucus",
    examples: "raucous"
  },
  {
    root: "re-, red-",
    meaning: "again, back",
    origin: "Latin",
    etymology: "re-",
    examples: "recede, redact"
  },
  {
    root: "reg-, -rig-, rect-",
    meaning: "straight",
    origin: "Latin",
    etymology: "regere, rectus",
    examples: "dirigible, erect, erection, rectum"
  },
  {
    root: "rem-",
    meaning: "oar",
    origin: "Latin",
    etymology: "remus",
    examples: "bireme, trireme"
  },
  {
    root: "ren-",
    meaning: "kidney",
    origin: "Latin",
    etymology: "renes",
    examples: "renal"
  },
  {
    root: "rep-, rept-",
    meaning: "crawl, creep",
    origin: "Latin",
    etymology: "repere, reptus",
    examples: "reptile"
  },
  {
    root: "ret-",
    meaning: "net",
    origin: "Latin",
    etymology: "rete",
    examples: "reticle, retina"
  },
  {
    root: "retro-",
    meaning: "backward, behind",
    origin: "Latin",
    etymology: "retro",
    examples: "retrograde, retrospective, retrovirus"
  },
  {
    root: "rhabd-",
    meaning: "rod",
    origin: "Greek",
    etymology: "ῥάβδος (rhabdos)",
    examples: "rhabdoid, rhabdom"
  },
  {
    root: "rhach-, rach-",
    meaning: "spine",
    origin: "Greek",
    etymology: "ῥάχις, ῥάχεως (rhachis)",
    examples: "rhachiodont"
  },
  {
    root: "rhag-",
    meaning: "tear, rent",
    origin: "Greek",
    etymology: "ῥαγίζω",
    examples: "rhagades"
  },
  {
    root: "rhe-",
    meaning: "flow",
    origin: "Greek",
    etymology: "ῥεῖν (rhein)",
    examples: "rheostat"
  },
  {
    root: "rhig-",
    meaning: "chill",
    origin: "Greek",
    etymology: "ῥῖγος (rhigos)",
    examples: "rhigosaurus"
  },
  {
    root: "rhin-",
    meaning: "nose, snout",
    origin: "Greek",
    etymology: "ῥίς, ῥινός (rhis, rhinos)",
    examples: "rhinoplasty"
  },
  {
    root: "rhiz-",
    meaning: "root",
    origin: "Greek",
    etymology: "ῥίζα (rhiza)",
    examples: "rhizome"
  },
  {
    root: "rhod-",
    meaning: "rose",
    origin: "Greek",
    etymology: "ῥόδον (rhodon)",
    examples: "rhododendron"
  },
  {
    root: "rhomb-",
    meaning: "spinning top",
    origin: "Greek",
    etymology: "ῥόμβος (rhombos)",
    examples: "rhombus"
  },
  {
    root: "rhynch-",
    meaning: "snout",
    origin: "Greek",
    etymology: "ῥύγχος",
    examples: "Rhynchobatus"
  },
  {
    root: "rid-, ris-",
    meaning: "laugh",
    origin: "Latin",
    etymology: "ridere, risus",
    examples: "derision, ridicule"
  },
  {
    root: "robor-",
    meaning: "oak, strength",
    origin: "Latin",
    etymology: "robur, roboris",
    examples: "corroboration"
  },
  {
    root: "rod-, ros-",
    meaning: "gnaw",
    origin: "Latin",
    etymology: "rodere, rosus",
    examples: "corrode, erosion, rodent"
  },
  {
    root: "rog-",
    meaning: "ask",
    origin: "Latin",
    etymology: "rogare",
    examples: "derogatory, interrogation"
  },
  {
    root: "rostr-",
    meaning: "beak, prow",
    origin: "Latin",
    etymology: "rostrum",
    examples: "rostral, rostriform, rostrum"
  },
  {
    root: "rot-",
    meaning: "wheel",
    origin: "Latin",
    etymology: "rota, rotare",
    examples: "rotation"
  },
  {
    root: "ruber-, rubr-",
    meaning: "red",
    origin: "Latin",
    etymology: "ruber",
    examples: "rubric, ruby"
  },
  {
    root: "rug-",
    meaning: "wrinkle",
    origin: "Latin",
    etymology: "ruga, rugare",
    examples: "corrugation"
  },
  {
    root: "rumin-",
    meaning: "throat",
    origin: "Latin",
    etymology: "rumen, ruminis",
    examples: "rumination"
  },
  {
    root: "rump-, rupt-",
    meaning: "break",
    origin: "Latin",
    etymology: "rumpere, ruptus",
    examples: "eruption, rupture, interrupt"
  },
  {
    root: "rur-",
    meaning: "country",
    origin: "Latin",
    etymology: "rus, ruris",
    examples: "rural"
  },
  {
    root: "sacchar-",
    meaning: "sugar",
    origin: "Greek",
    etymology: "σάκχαρον (sakcharon)",
    examples: "saccharin"
  },
  {
    root: "sacr-, secr-",
    meaning: "sacred",
    origin: "Latin",
    etymology: "sacer, sacrare",
    examples: "consecrate, sacrament"
  },
  {
    root: "sagac-",
    meaning: "wise",
    origin: "Latin",
    etymology: "sagax, sagacis",
    examples: "sagacity"
  },
  {
    root: "sagitt-",
    meaning: "arrow",
    origin: "Latin",
    etymology: "sagitta",
    examples: "sagittal plane, Sagittaria"
  },
  {
    root: "sal-",
    meaning: "salt",
    origin: "Latin",
    etymology: "sal, salis, salere",
    examples: "salinity"
  },
  {
    root: "sali-, -sili-, salt-",
    meaning: "jump",
    origin: "Latin",
    etymology: "salire, saltus",
    examples: "resilient, salient, saltus"
  },
  {
    root: "salic-",
    meaning: "willow",
    origin: "Latin",
    etymology: "salix, salicis",
    examples: "salicin"
  },
  {
    root: "salv-",
    meaning: "save",
    origin: "Latin",
    etymology: "salvus, salvare",
    examples: "salvation"
  },
  {
    root: "san-",
    meaning: "healthy",
    origin: "Latin",
    etymology: "sanus",
    examples: "insane, sanity"
  },
  {
    root: "sanc-",
    meaning: "holy",
    origin: "Latin",
    etymology: "sancire, sanctus",
    examples: "sanctify, sanctuary"
  },
  {
    root: "sanguin-",
    meaning: "blood",
    origin: "Latin",
    etymology: "sanguis, sanguinis",
    examples: "consanguinity, sanguine"
  },
  {
    root: "sapi-, -sipi-",
    meaning: "taste, wise",
    origin: "Latin",
    etymology: "sapere",
    examples: "insipience, sapient"
  },
  {
    root: "sapon-",
    meaning: "soap",
    origin: "Latin",
    etymology: "sapo, saponis",
    examples: "saponification"
  },
  {
    root: "sarc-",
    meaning: "flesh",
    origin: "Greek",
    etymology: "σάρξ, σαρκός (sarx, sarkos)",
    examples: "sarcophagus"
  },
  {
    root: "saur-",
    meaning: "lizard, reptile",
    origin: "Greek",
    etymology: "σαῦρος (sauros)",
    examples: "dinosaur"
  },
  { root: "sax-", meaning: "rock", origin: "Latin", etymology: "saxum" },
  {
    root: "scab-",
    meaning: "scratch",
    origin: "Latin",
    etymology: "scabere",
    examples: "scabies"
  },
  {
    root: "scal-",
    meaning: "ladder, stairs",
    origin: "Latin",
    etymology: "scala",
    examples: "scalar, scale"
  },
  {
    root: "scalen-",
    meaning: "uneven",
    origin: "Greek",
    etymology: "σκαληνός (skalēnos)",
    examples: "scalene muscles, scalene triangle"
  },
  {
    root: "scand-, -scend-, scans-, -scens-",
    meaning: "climb",
    origin: "Latin",
    etymology: "scandere",
    examples: "ascend, transcendent, descend"
  },
  {
    root: "scaph-",
    meaning: "anything hollow, bowl, ship",
    origin: "Greek",
    etymology: "σκάφη, σκάφος",
    examples: "scaphoid bone"
  },
  {
    root: "scel-",
    meaning: "leg, thigh",
    origin: "Greek",
    etymology: "σκέλος, σκέλεος (skelos)",
    examples: "isosceles"
  },
  {
    root: "schem-",
    meaning: "plan",
    origin: "Greek",
    etymology: "σχῆμα (schēma)",
    examples: "schematic"
  },
  {
    root: "schis-",
    meaning: "split",
    origin: "Greek",
    etymology: "σχίζω, σχίσμα (schisma)",
    examples: "schism"
  },
  {
    root: "sci-",
    meaning: "know",
    origin: "Latin",
    etymology: "scire",
    examples: "prescient, science"
  },
  {
    root: "scind-, sciss-",
    meaning: "split",
    origin: "Latin",
    etymology: "scindere",
    examples: "rescind, scissors"
  },
  {
    root: "scler-",
    meaning: "hard",
    origin: "Greek",
    etymology: "σκληρός (sklēros)",
    examples: "scleroderma, sclerosis"
  },
  {
    root: "scoli-",
    meaning: "crooked",
    origin: "Greek",
    etymology: "σκολιός (skolios)",
    examples: "scoliosis"
  },
  {
    root: "scop-, scept-",
    meaning: "look at, examine, view, observe",
    origin: "Greek",
    etymology: "σκέπτομαι, σκοπός",
    examples: "horoscope, kaleidoscope, stethoscope"
  },
  { etymology: "(skopos)" },
  {
    root: "scrib-, script-",
    meaning: "write",
    origin: "Latin",
    etymology: "scribere, scriptus",
    examples: "inscribe, scripture"
  },
  {
    root: "sculp-",
    meaning: "carve",
    origin: "Latin",
    etymology: "sculpere, sculptus",
    examples: "sculpture"
  },
  {
    root: "scut-",
    meaning: "shield",
    origin: "Latin",
    etymology: "scutum",
    examples: "scute"
  },
  {
    root: "scyph-",
    meaning: "cup",
    origin: "Greek",
    etymology: "χούφτα (chouphta)",
    examples: "Scyphozoa"
  },
  {
    root: "se-, sed-",
    meaning: "apart",
    origin: "Latin",
    etymology: "se",
    examples: "secede, sedition"
  },
  {
    root: "seb-",
    meaning: "tallow",
    origin: "Latin",
    etymology: "sebum",
    examples: "sebaceous, sebum"
  },
  {
    root: "sec-, sect-, seg-",
    meaning: "cut",
    origin: "Latin",
    etymology: "secare",
    examples: "secant, section, segment"
  },
  {
    root: "sed-",
    meaning: "settle, calm",
    origin: "Latin",
    etymology: "sedare, sedatus",
    examples: "sedative"
  },
  {
    root: "sed-, -sid-, sess-",
    meaning: "sit",
    origin: "Latin",
    etymology: "sedere, sessus",
    examples: "reside, sediment, session, supersede"
  },
  {
    root: "sedec-",
    meaning: "sixteen",
    origin: "Latin",
    etymology: "sedecim",
    examples: "sedecimal"
  },
  {
    root: "seget-",
    meaning: "in cornfields",
    origin: "Latin",
    etymology: "segetum"
  },
  {
    root: "sei-",
    meaning: "shake",
    origin: "Greek",
    etymology: "σείω, σεισμός (seismos)",
    examples: "seismograph"
  },
  {
    root: "selen-",
    meaning: "moon",
    origin: "Greek",
    etymology: "σελήνη (selēnē)",
    examples: "Selene, selenium"
  },
  {
    root: "sell-",
    meaning: "saddle, seat",
    origin: "Latin",
    etymology: "sella",
    examples: "sella turcica"
  },
  {
    root: "sema-",
    meaning: "sign",
    origin: "Greek",
    etymology: "σῆμα (sēma)",
    examples: "semantics, semaphore"
  },
  {
    root: "semi-",
    meaning: "half",
    origin: "Latin",
    etymology: "semis",
    examples: "semifinal"
  },
  {
    root: "semin-",
    meaning: "seed",
    origin: "Latin",
    etymology: "semen, seminis",
    examples: "insemination"
  },
  {
    root: "sen-",
    meaning: "old man",
    origin: "Latin",
    etymology: "senex, senis",
    examples: "senator, senility"
  },
  {
    root: "sen-",
    meaning: "six each",
    origin: "Latin",
    etymology: "seni",
    examples: "senary"
  },
  {
    root: "senti-, sens-",
    meaning: "feel",
    origin: "Latin",
    etymology: "sentire, sensus",
    examples: "consensus, sentient"
  },
  {
    root: "sept-",
    meaning: "fence, partition, enclosure",
    origin: "Latin",
    etymology: "saeptum",
    examples: "transept"
  },
  {
    root: "sept-",
    meaning: "seven",
    origin: "Latin",
    etymology: "septem",
    examples: "septennial"
  },
  {
    root: "septen-",
    meaning: "seven each",
    origin: "Latin",
    etymology: "septeni",
    examples: "septenary"
  },
  {
    root: "septim-",
    meaning: "seventh",
    origin: "Latin",
    etymology: "septimus",
    examples: "septimal, septime"
  },
  {
    root: "septuagen-",
    meaning: "seventy each",
    origin: "Latin",
    etymology: "septuageni",
    examples: "septuagenary"
  },
  {
    root: "septuagesim-",
    meaning: "seventieth",
    origin: "Latin",
    etymology: "septuagesimus",
    examples: "septuagesima, septuagesimal"
  },
  {
    root: "septuagint-",
    meaning: "seventy",
    origin: "Latin",
    etymology: "septuaginta",
    examples: "Septuagint"
  },
  {
    root: "sequ-, secut-",
    meaning: "follow",
    origin: "Latin",
    etymology: "sequere, secutus",
    examples: "consecutive, sequence"
  },
  {
    root: "ser-, sat-",
    meaning: "cultivate",
    origin: "Latin",
    etymology: "serere, satus",
    examples: "sative"
  },
  {
    root: "ser-",
    meaning: "body fluid",
    origin: "Latin",
    etymology: "serum",
    examples: "serous"
  },
  {
    root: "ser-",
    meaning: "late",
    origin: "Latin",
    etymology: "serus",
    examples: "serein, serotine"
  },
  {
    root: "serp-",
    meaning: "crawl, creep",
    origin: "Latin",
    etymology: "serpere, serptus",
    examples: "serpent"
  },
  {
    root: "serr-",
    meaning: "saw, saw-toothed",
    origin: "Latin",
    etymology: "serra, serrare",
    examples: "serration"
  },
  {
    root: "serv-",
    meaning: "save, protect, serve",
    origin: "Latin",
    etymology: "servare",
    examples: "conservation"
  },
  {
    root: "sesqui-",
    meaning: "one and a half",
    origin: "Latin",
    etymology: "sesqui",
    examples: "sesquicentennial"
  },
  {
    root: "set-",
    meaning: "bristle, hair",
    origin: "Latin",
    etymology: "saeta",
    examples: "seta, setose"
  },
  {
    root: "sever-",
    meaning: "stern, strict, serious",
    origin: "Latin",
    etymology: "severus",
    examples: "severity"
  },
  {
    root: "sex-, se-",
    meaning: "six",
    origin: "Latin",
    etymology: "sex",
    examples: "semester, sexangle, sexennium"
  },
  {
    root: "sexagen-",
    meaning: "sixty each",
    origin: "Latin",
    etymology: "sexageni",
    examples: "sexagenary"
  },
  {
    root: "sexagesim-",
    meaning: "sixtieth",
    origin: "Latin",
    etymology: "sexagesimus",
    examples: "sexagesimal"
  },
  {
    root: "sext-",
    meaning: "sixth",
    origin: "Latin",
    etymology: "sextus",
    examples: "sextant"
  },
  {
    root: "sibil-",
    meaning: "hiss",
    origin: "Latin",
    etymology: "sibilus, sibilare",
    examples: "sibilance"
  },
  {
    root: "sicc-",
    meaning: "dry",
    origin: "Latin",
    etymology: "siccus",
    examples: "desiccation"
  },
  {
    root: "sider-",
    meaning: "star",
    origin: "Latin",
    etymology: "sidus, sideris",
    examples: "sidereal"
  },
  {
    root: "sign-",
    meaning: "sign",
    origin: "Latin",
    etymology: "signum",
    examples: "design, designate, signal"
  },
  {
    root: "sil-",
    meaning: "quiet or still",
    origin: "Latin",
    etymology: "silere",
    examples: "silence"
  },
  {
    root: "silv(i)-",
    meaning: "forest",
    origin: "Latin",
    etymology: "silva",
    examples: "silviculture"
  },
  {
    root: "simi-",
    meaning: "ape, monkey",
    origin: "Latin",
    etymology: "simia",
    examples: "simian"
  },
  {
    root: "simil-",
    meaning: "likeness, trust, group",
    origin: "Latin",
    etymology: "similis",
    examples: "assimilate, similarity"
  },
  {
    root: "simul-",
    meaning: "imitating, feigning",
    origin: "Latin",
    etymology: "simulare",
    examples: "simulation"
  },
  {
    root: "singul-",
    meaning: "one each",
    origin: "Latin",
    etymology: "singulus",
    examples: "singular"
  },
  {
    root: "sinistr-",
    meaning: "left",
    origin: "Latin",
    etymology: "sinister, sinistri",
    examples: "sinistral"
  },
  {
    root: "sinu-",
    meaning: "(to draw) a line",
    origin: "Latin",
    etymology: "sinuare",
    examples: "insinuate"
  },
  {
    root: "sinus-",
    meaning: "hollow, bay",
    origin: "Latin",
    etymology: "sinus"
  },
  {
    root: "siph(o)-",
    meaning: "tube",
    origin: "Greek",
    etymology: "σίφων (siphōn)",
    examples: "siphon"
  },
  {
    root: "sist-",
    meaning: "cause to stand",
    origin: "Latin",
    etymology: "sistere",
    examples: "consist, persistence"
  },
  {
    root: "sit-",
    meaning: "food, grain, wheat",
    origin: "Greek",
    etymology: "σῖτος (sitos)",
    examples: "sitology"
  },
  {
    root: "soci-",
    meaning: "group",
    origin: "Latin",
    etymology: "socius, sociare",
    examples: "associate, social"
  },
  {
    root: "sol-",
    meaning: "sun",
    origin: "Latin",
    etymology: "sol, solis",
    examples: "solar"
  },
  {
    root: "sol-",
    meaning: "comfort, soothe",
    origin: "Latin",
    etymology: "solari",
    examples: "consolation, solace"
  },
  {
    root: "sol-",
    meaning: "alone, only",
    origin: "Latin",
    etymology: "solus",
    examples: "desolate, sole, solo, solipsism"
  },
  {
    root: "solen-",
    meaning: "pipe, channel",
    origin: "Greek",
    etymology: "σωλήν (sōlēn)",
    examples: "solenoid"
  },
  {
    root: "solv-, solut-",
    meaning: "loosen, set free",
    origin: "Latin",
    etymology: "solvere, solutus",
    examples: "dissolve, solution"
  },
  {
    root: "soma-",
    meaning: "body",
    origin: "Greek",
    etymology: "σῶμα, σώματος (sōma, sōmatos)",
    examples: "somatic"
  },
  {
    root: "somn-",
    meaning: "sleep",
    origin: "Latin",
    etymology: "somnus",
    examples: "insomnia"
  },
  { root: "somni-", meaning: "dream", origin: "Latin", etymology: "somnium" },
  {
    root: "son-",
    meaning: "sound",
    origin: "Latin",
    etymology: "sonus",
    examples: "resonance"
  },
  {
    root: "soph-",
    meaning: "wise",
    origin: "Greek",
    etymology: "σοφός (sophos)",
    examples: "sophist"
  },
  {
    root: "sorb-, sorpt-",
    meaning: "suck",
    origin: "Latin",
    etymology: "sorbere",
    examples: "absorb, absorption"
  },
  {
    root: "sord-",
    meaning: "dirt",
    origin: "Latin",
    etymology: "sordes, sordere",
    examples: "sordid"
  },
  {
    root: "soror-",
    meaning: "sister",
    origin: "Latin",
    etymology: "soror",
    examples: "sorority"
  },
  {
    root: "spati-",
    meaning: "space",
    origin: "Latin",
    etymology: "spatium",
    examples: "spatial"
  },
  {
    root: "spec-, -spic-, spect-",
    meaning: "look",
    origin: "Latin",
    etymology: "specere",
    examples: "conspicuous, inspection, specimen"
  },
  {
    root: "spect-",
    meaning: "watch, look at",
    origin: "Latin",
    etymology: "spectare",
    examples: "spectator"
  },
  {
    root: "specul-",
    meaning: "observe",
    origin: "Latin",
    etymology: "speculari",
    examples: "speculation"
  },
  {
    root: "sper-",
    meaning: "hope",
    origin: "Latin",
    etymology: "spes, sperare",
    examples: "desperation, esperance"
  },
  {
    root: "sperm-",
    meaning: "seed",
    origin: "Greek",
    etymology: "σπέρμα (sperma)",
    examples: "angiosperm"
  },
  {
    root: "sphen-",
    meaning: "wedge",
    origin: "Greek",
    etymology: "σφήν (sphēn)"
  },
  {
    root: "spher-",
    meaning: "ball",
    origin: "Greek",
    etymology: "σφαῖρα (sphaira)",
    examples: "sphere, spheroid"
  },
  {
    root: "sphinct-",
    meaning: "closing",
    origin: "Greek",
    etymology: "σφίγγα",
    examples: "sphincter"
  },
  {
    root: "spic-",
    meaning: "spike",
    origin: "Latin",
    etymology: "spica",
    examples: "spicule"
  },
  {
    root: "spin-",
    meaning: "thorn",
    origin: "Latin",
    etymology: "spina",
    examples: "spine"
  },
  {
    root: "spir-",
    meaning: "breathe",
    origin: "Latin",
    etymology: "spirare",
    examples: "respiration"
  },
  {
    root: "spond-, spons-",
    meaning: "a surety, guarantee; give assurance, promise solemnly",
    origin: "Latin",
    etymology: "spondere, sponsus",
    examples: "respond"
  },
  { root: "spondyl-", meaning: "vertebra" },
  {
    root: "spu-, sput-",
    meaning: "spew, spit",
    origin: "Latin",
    etymology: "spuere",
    examples: "sputum"
  },
  {
    root: "squal-",
    meaning: "scaly, dirty, filthy",
    origin: "Latin",
    etymology: "squalere",
    examples: "squalid, squalor"
  },
  {
    root: "squam-",
    meaning: "scale",
    origin: "Latin",
    etymology: "squama",
    examples: "squamous"
  },
  { root: "squarros-", meaning: "spreading at tips", origin: "Latin" },
  {
    root: "st-",
    meaning: "stand",
    origin: "Latin",
    etymology: "stare, status",
    examples: "stable, station, statistic, statue, status"
  },
  {
    root: "stagn-",
    meaning: "pool of standing water",
    origin: "Latin",
    etymology: "stagnare",
    examples: "stagnant"
  },
  {
    root: "stalact-",
    origin: "Greek",
    etymology: "σταλακτίτης (stalaktitēs)",
    examples: "stalactite"
  },
  {
    root: "stalagm-",
    origin: "Greek",
    etymology: "σταλαγμός (stalagmos)",
    examples: "stalagmite"
  },
  {
    root: "stann-",
    meaning: "tin",
    origin: "Latin",
    etymology: "stannum",
    examples: "stannous"
  },
  {
    root: "statu-, -stitu-",
    meaning: "stand",
    origin: "Latin",
    etymology: "statuere",
    examples: "institution, statute"
  },
  {
    root: "stea-",
    meaning: "fat, tallow",
    origin: "Greek",
    etymology: "στέαρ, στέατος (stear, steatos)",
    examples: "stearic acid"
  },
  {
    root: "steg-",
    meaning: "covering",
    origin: "Greek",
    examples: "steganography"
  },
  {
    root: "stell-",
    meaning: "star",
    origin: "Latin",
    etymology: "stella",
    examples: "constellation, stellar"
  },
  {
    root: "sten-",
    meaning: "narrow",
    origin: "Greek",
    etymology: "στενός (stenos)",
    examples: "stenography"
  },
  {
    root: "stere-",
    meaning: "solid",
    origin: "Greek",
    etymology: "στερεός (stereos)"
  },
  {
    root: "stern-, strat-",
    meaning: "spread, strew",
    origin: "Latin",
    etymology: "sternere, stratus",
    examples: "stratify"
  },
  {
    root: "stern-",
    meaning: "breastbone",
    origin: "Greek",
    etymology: "στέρνον (sternon)",
    examples: "sternum"
  },
  {
    root: "stich-",
    meaning: "line, row",
    origin: "Greek",
    etymology: "στίχος (stichos)"
  },
  {
    root: "stig-",
    origin: "Greek",
    etymology: "στίγμα (stigma)",
    examples: "stigma"
  },
  {
    root: "still-",
    meaning: "drip",
    origin: "Latin",
    etymology: "stilla, stillare",
    examples: "distillation"
  },
  {
    root: "stimul-",
    meaning: "goad, rouse, excite",
    origin: "Latin",
    etymology: "stimulus",
    examples: "stimulate"
  },
  {
    root: "stingu-, stinct-",
    meaning: "apart",
    origin: "Latin",
    etymology: "stinguere",
    examples: "distinction, distinguish"
  },
  {
    root: "stoch-",
    meaning: "aim",
    origin: "Greek",
    etymology: "στόχος",
    examples: "stochastic"
  },
  {
    root: "stom-",
    meaning: "mouth",
    origin: "Greek",
    etymology: "στόμα (stoma)",
    examples: "stomatoplasty"
  },
  {
    root: "strept-",
    meaning: "twisted",
    origin: "Greek",
    etymology: "στρεπτός (streptos)"
  },
  {
    root: "strig-",
    meaning: "compress",
    origin: "Latin",
    etymology: "strix, strigis",
    examples: "strigogyps"
  },
  { root: "strigos-", meaning: "having stiff bristles", origin: "Latin" },
  {
    root: "string-, strict-",
    meaning: "upright, stiff",
    origin: "Latin",
    etymology: "stringere, strictus",
    examples: "stringent"
  },
  {
    root: "stroph-",
    meaning: "turning",
    origin: "Greek",
    etymology: "στροφή (strophē)",
    examples: "apostrophe"
  },
  {
    root: "stru-, struct-",
    meaning: "to make up, build",
    origin: "Latin",
    etymology: "struere, structus",
    examples: "construction, construe"
  },
  {
    root: "stud-",
    meaning: "dedication",
    origin: "Latin",
    etymology: "studere",
    examples: "student"
  },
  {
    root: "stup-",
    meaning: "wonder",
    origin: "Latin",
    etymology: "stupere",
    examples: "stupor"
  },
  {
    root: "styl-",
    meaning: "column, pillar",
    origin: "Greek",
    etymology: "στῦλος (stulos)",
    examples: "stylus"
  },
  {
    root: "su-, sut-",
    meaning: "sew",
    origin: "Latin",
    etymology: "suere, sutus",
    examples: "suture"
  },
  {
    root: "sui-",
    meaning: "self",
    origin: "Latin",
    etymology: "sui",
    examples: "sui generis, suicide"
  },
  {
    root: "suad-, suas-",
    meaning: "urge",
    origin: "Latin",
    etymology: "suadere, suasus",
    examples: "persuasion"
  },
  {
    root: "suav-",
    meaning: "sweet",
    origin: "Latin",
    etymology: "suavis",
    examples: "suave"
  },
  {
    root: "sub-, su-, suf-, sug-, sus-",
    meaning: "below",
    origin: "Latin",
    etymology: "sub",
    examples: "submerge, suffix, suggest"
  },
  {
    root: "subter-",
    meaning: "under",
    origin: "Latin",
    etymology: "subter",
    examples: "subterfuge"
  },
  { root: "sucr-", meaning: "sugar", origin: "Latin", examples: "sucrose" },
  {
    root: "sud-",
    meaning: "sweat",
    origin: "Latin",
    etymology: "sudare",
    examples: "sudoriferous"
  },
  {
    root: "sulc-",
    meaning: "furrow",
    origin: "Latin",
    etymology: "sulcus",
    examples: "sulcus"
  },
  {
    root: "sum-, sumpt-",
    meaning: "take",
    origin: "Latin",
    etymology: "sumere, sumptus",
    examples: "assumption, consume"
  },
  {
    root: "super-",
    meaning: "above, over",
    origin: "Latin",
    etymology: "super",
    examples: "supersede"
  },
  {
    root: "supin-",
    meaning: "lying back",
    origin: "Latin",
    etymology: "supinus",
    examples: "supination"
  },
  {
    root: "supra-",
    meaning: "above, over",
    origin: "Latin",
    etymology: "supra",
    examples: "supranationalism"
  },
  {
    root: "surd-",
    meaning: "deaf",
    origin: "Latin",
    etymology: "surdus",
    examples: "absurdity"
  },
  {
    root: "surg-",
    meaning: "rise",
    origin: "Latin",
    etymology: "surgere",
    examples: "resurgent"
  },
  {
    root: "syn-, sy-, syl-, sym-",
    meaning: "with",
    origin: "Greek",
    etymology: "σύν (sun)",
    examples: "symbol, symmetry, sympathy, synchronous, synonym, system"
  },
  {
    root: "syring-",
    meaning: "pipe",
    origin: "Greek",
    etymology: "σύριγξ, σύριγγος (syrinx, syringos)",
    examples: "syringe"
  },
  {
    root: "tac-, -tic-",
    meaning: "be silent",
    origin: "Latin",
    etymology: "tacere, tacitus",
    examples: "reticent, tacit"
  },
  {
    root: "tach-",
    meaning: "swift",
    origin: "Greek",
    etymology: "ταχύς (tachus)",
    examples: "tachometer, tachycardia"
  },
  {
    root: "taeni-",
    meaning: "ribbon",
    origin: "Greek",
    etymology: "ταινία (tainia)",
    examples: "taenidium, taeniodont, Taeniolabis"
  },
  {
    root: "tal-",
    meaning: "ankle",
    origin: "Latin",
    etymology: "talus",
    examples: "talus bone"
  },
  {
    root: "tang-, -ting-, tact-, tag-",
    meaning: "touch",
    origin: "Latin",
    etymology: "tangere, tactus",
    examples: "contact, tactile, tangent"
  },
  {
    root: "tapet-",
    meaning: "carpet",
    origin: "Latin",
    etymology: "tapete, tapetis",
    examples: "tapestry, tapetum, tapis"
  },
  {
    root: "tard-",
    meaning: "slow",
    origin: "Latin",
    etymology: "tardus",
    examples: "retard, tardigrade, tardy"
  },
  {
    root: "tars-",
    meaning: "ankle",
    origin: "Greek",
    etymology: "ταρσός (tarsos, a flat basket)",
    examples: "tarsal"
  },
  {
    root: "taur-",
    meaning: "bull",
    origin: "Greek",
    etymology: "ταῦρος (tauros)",
    examples: "Minotaur"
  },
  {
    root: "taur-",
    meaning: "bull",
    origin: "Latin",
    etymology: "taurus",
    examples: "Taurus"
  },
  {
    root: "tax-",
    meaning: "arrangement, order",
    origin: "Greek",
    etymology: "τάξις (taxis)",
    examples: "taxonomy"
  },
  {
    root: "techn-",
    meaning: "art, skill",
    origin: "Greek",
    etymology: "τέχνη (technē)",
    examples: "technology"
  },
  {
    root: "teg-, tect-",
    meaning: "cover",
    origin: "Latin",
    etymology: "tegere, tectus",
    examples: "integument, protection"
  },
  {
    root: "tele-",
    meaning: "far, end",
    origin: "Greek",
    etymology: "τῆλε (tēle)",
    examples: "telegram, telephone, telescope"
  },
  {
    root: "tele-",
    meaning: "complete",
    origin: "Greek",
    etymology: "τέλος (telos)",
    examples: "teleology"
  },
  {
    root: "temn-",
    meaning: "cut",
    origin: "Greek",
    etymology: "τέμνω (temnō)",
    examples: "Temnospondyli"
  },
  {
    root: "tempor-",
    meaning: "time",
    origin: "Latin",
    etymology: "tempus, temporis",
    examples: "contemporary, temporal, temporary"
  },
  {
    root: "ten-, -tin-, tent-",
    meaning: "hold",
    origin: "Latin",
    etymology: "tenere, tentus",
    examples: "continent, detention, tenacious, tenor"
  },
  {
    root: "tend-, tens-",
    meaning: "stretch, strain",
    origin: "Latin",
    etymology: "tendere, tensus",
    examples: "extend, extension"
  },
  {
    root: "tenu-",
    meaning: "slender, thin",
    origin: "Latin",
    etymology: "tenuis",
    examples: "attenuate, tenuous"
  },
  {
    root: "tep-",
    meaning: "be warm",
    origin: "Latin",
    etymology: "tepere",
    examples: "tepid, tepor"
  },
  {
    root: "ter-, trit-",
    meaning: "rub",
    origin: "Latin",
    etymology: "terere, tritus",
    examples: "attrition, contrite, detritus, trite"
  },
  {
    root: "teret-",
    meaning: "rounded",
    origin: "Latin",
    etymology: "teres, teretis",
    examples: "subterete, teretial"
  },
  {
    root: "terg-, ters-",
    meaning: "wipe",
    origin: "Latin",
    etymology: "tergere, tersus",
    examples: "detergent, terse"
  },
  {
    root: "termin-",
    meaning: "boundary, limit, end",
    origin: "Latin",
    etymology: "terminus",
    examples: "determine, terminal, termination"
  },
  {
    root: "tern-",
    meaning: "three each",
    origin: "Latin",
    etymology: "terni",
    examples: "ternary, ternion"
  },
  {
    root: "terr-",
    meaning: "dry land",
    origin: "Latin",
    etymology: "terra",
    examples: "subterranean, terrace, terracotta, terrain"
  },
  {
    root: "terti-",
    meaning: "third",
    origin: "Latin",
    etymology: "tertius",
    examples: "tertian, tertiary"
  },
  {
    root: "test-",
    meaning: "witness",
    origin: "Latin",
    etymology: "testis",
    examples: "testament, testimony"
  },
  {
    root: "tetr-",
    meaning: "four",
    origin: "Greek",
    etymology: "τέσσαρες (tessares)",
    examples: "tetrahedron, tetrode"
  },
  {
    root: "tex-, text-",
    meaning: "weave",
    origin: "Latin",
    etymology: "texere, textus",
    examples: "context, texture, textile"
  },
  {
    root: "thalam-",
    meaning: "chamber, bed",
    origin: "Greek",
    etymology: "θάλαμος (thalamos)"
  },
  {
    root: "thalass-",
    meaning: "sea",
    origin: "Greek",
    etymology: "θάλασσα (thalassa)",
    examples: "Panthalassa"
  },
  {
    root: "than-",
    meaning: "death",
    origin: "Greek",
    etymology: "θάνατος (thanatos)",
    examples: "euthanasia"
  },
  {
    root: "the-, thus-",
    meaning: "god",
    origin: "Greek",
    etymology: "θεός (theos)",
    examples: "enthusiasm, theology"
  },
  {
    root: "the-",
    meaning: "put",
    origin: "Greek",
    etymology: "τίθημι (tithēmi), θήκη (thēkē)",
    examples: "Bibliotheca, theca, theme, thesis"
  },
  { root: "thel-", origin: "Greek", etymology: "θηλή (thēlē)" },
  {
    root: "theori-",
    meaning: "speculation",
    origin: "Greek",
    etymology: "θεωρία (theōria)",
    examples: "theorem, theory"
  },
  {
    root: "ther-",
    meaning: "beast, animal",
    origin: "Greek",
    etymology: "θήρ, θηρός (thēr)",
    examples: "theroid, theropod"
  },
  {
    root: "therm-",
    meaning: "heat, warm",
    origin: "Greek",
    etymology: "θερμός (thermos)",
    examples: "endotherm, thermometer"
  },
  {
    root: "thym-",
    meaning: "mood",
    origin: "Greek",
    etymology: "θυμός (thumos)",
    examples: "dysthymia"
  },
  {
    root: "thyr-",
    meaning: "door",
    origin: "Greek",
    etymology: "θύρα (thura)",
    examples: "thyratron"
  },
  {
    root: "thyre-",
    meaning: "large shield",
    origin: "Greek",
    etymology: "θυρεός (thureos)",
    examples: "Thyreophora, thyroid, thyrotropin, thyroxine"
  },
  {
    root: "tim-",
    meaning: "be afraid",
    origin: "Latin",
    etymology: "timere",
    examples: "timid, timorous"
  },
  {
    root: "ting-, tinct-",
    meaning: "moisten",
    origin: "Latin",
    etymology: "tingere, tinctus",
    examples: "tincture"
  },
  {
    root: "tom-",
    meaning: "cut",
    origin: "Greek",
    etymology: "τομή (tome), τόμος (tomos)",
    examples: "ectomy, atom, tome"
  },
  {
    root: "ton-",
    meaning: "stretch",
    origin: "Greek",
    etymology: "τόνος (tonos)",
    examples: "isotonic, monotone, tone"
  },
  {
    root: "top-",
    meaning: "place",
    origin: "Greek",
    etymology: "τόπος (topos)",
    examples: "topic, topography"
  },
  {
    root: "torn-",
    meaning: "cut",
    origin: "Latin from Greek",
    etymology: "tornare < τόρνος (tornos)"
  },
  {
    root: "torpe-",
    meaning: "numb",
    origin: "Latin",
    etymology: "torpere",
    examples: "torpent, torpid, torpor"
  },
  {
    root: "torqu-, tort-",
    meaning: "twist",
    origin: "Latin",
    etymology: "torquere, tortus",
    examples: "extortion, torque, torture"
  },
  {
    root: "tot-",
    meaning: "all, whole",
    origin: "Latin",
    etymology: "totus",
    examples: "subtotal, total, totality"
  },
  {
    root: "tox-",
    meaning: "arrow, bow",
    origin: "Greek",
    etymology: "τόξον (toxon)"
  },
  {
    root: "trab-",
    meaning: "beam",
    origin: "Latin",
    etymology: "trabs, trabis",
    examples: "trabeculae"
  },
  {
    root: "trachy-",
    meaning: "rough",
    origin: "Greek",
    etymology: "τραχύς (trachus)",
    examples: "trachea"
  },
  {
    root: "trag-",
    meaning: "goat",
    origin: "Greek",
    etymology: "τράγος (tragos)",
    examples: "tragus"
  },
  {
    root: "trah-, tract-",
    meaning: "draw, pull",
    origin: "Latin",
    etymology: "trahere, tractus",
    examples: "subtrahend, tractor"
  },
  {
    root: "trans-, tra-, tran-",
    meaning: "across",
    origin: "Latin",
    etymology: "trans",
    examples: "tradition, transcend, transportation"
  },
  {
    root: "trapez-",
    meaning: "four-sided, table",
    origin: "Greek",
    etymology: "τράπεζα (trapeza)",
    examples: "trapezius, trapezoid"
  },
  {
    root: "traum-",
    meaning: "wound",
    origin: "Greek",
    etymology: "τραῦμα (trauma)",
    examples: "trauma, traumatic"
  },
  {
    root: "trecent-",
    meaning: "three hundred",
    origin: "Latin",
    etymology: "trecenti",
    examples: "trecentennial, trecentillion"
  },
  {
    root: "tredec-",
    meaning: "thirteen",
    origin: "Latin",
    etymology: "tredecim",
    examples: "tredecimal"
  },
  {
    root: "treiskaidek-",
    meaning: "thirteen",
    origin: "Greek",
    etymology: "τρεισκαίδεκα (treiskaideka)",
    examples: "triskaidekaphobia"
  },
  {
    root: "trem-",
    meaning: "tremble",
    origin: "Latin",
    etymology: "tremere",
    examples: "tremor"
  },
  {
    root: "trema-",
    meaning: "hole",
    origin: "Greek",
    etymology: "τρῆμα (trēma)",
    examples: "trematode"
  },
  {
    root: "tri-",
    meaning: "three",
    origin: "Greek",
    etymology: "τρεῖς, τρία (treis, tria)",
    examples: "triad, trigon, triode, tripod"
  },
  {
    root: "tri-",
    meaning: "three",
    origin: "Latin",
    etymology: "trēs",
    examples: "triangle, triumvirate, trivia"
  },
  {
    root: "tricen-",
    meaning: "thirty each",
    origin: "Latin",
    etymology: "triceni",
    examples: "tricenary"
  },
  {
    root: "tricesim-, trigesim-",
    meaning: "thirtieth",
    origin: "Latin",
    etymology: "tricesimus",
    examples: "trigesimal"
  },
  {
    root: "trich-",
    meaning: "hair",
    origin: "Greek",
    etymology: "θρίξ, τριχός (thrix, trichos)",
    examples: "peritrichous, trichopathophobia, Trichoptera"
  },
  {
    root: "trin-",
    meaning: "three each",
    origin: "Latin",
    etymology: "trini",
    examples: "trinary, trine, trinity"
  },
  {
    root: "trit-",
    meaning: "third",
    origin: "Greek",
    etymology: "τρίτος (tritos)",
    examples: "tritagonist"
  },
  {
    root: "troch-",
    meaning: "wheel",
    origin: "Greek",
    etymology: "τροχός (trochos)",
    examples: "trochlea"
  },
  {
    root: "trop-",
    meaning: "turning",
    origin: "Greek",
    etymology: "τρόπος (tropos)",
    examples: "heliotropism, psychotropic, tropic"
  },
  {
    root: "troph-",
    meaning: "feed, grow",
    origin: "Greek",
    etymology: "τροφή, τροφός (trophos)",
    examples: "dystrophy, pogonotrophy, trophic"
  },
  {
    root: "trud-, trus-",
    meaning: "thrust",
    origin: "Latin",
    etymology: "trudere, trusus",
    examples: "extrusion, intrude"
  },
  {
    root: "tuss-",
    meaning: "cough",
    origin: "Latin",
    etymology: "tussis, tussire",
    examples: "pertussis"
  },
  {
    root: "tympan-",
    meaning: "drum",
    origin: "Greek",
    etymology: "τύμπανον (tumpanon)",
    examples: "tympani"
  },
  {
    root: "typ-",
    meaning: "stamp, model",
    origin: "Greek",
    etymology: "τύπος (tupos)",
    examples: "archetype, phenotype, typography"
  },
  {
    root: "uber-",
    meaning: "fruitful",
    origin: "Latin",
    etymology: "uber, uberare",
    examples: "exuberant"
  },
  {
    root: "uligin-",
    meaning: "in marshes",
    origin: "Latin",
    etymology: "uligo, uliginis",
    examples: "uliginous"
  },
  { root: "ulo-", meaning: "wooly", origin: "Greek" },
  {
    root: "ultim-",
    meaning: "farthest",
    origin: "Latin",
    etymology: "ultimus",
    examples: "ultimatum, ultimate"
  },
  {
    root: "ultra-",
    meaning: "beyond",
    origin: "Latin",
    etymology: "ultra",
    examples: "ultrasonic"
  },
  {
    root: "umbilic-",
    meaning: "navel",
    origin: "Latin",
    etymology: "umbilicus",
    examples: "umbilical"
  },
  {
    root: "umbr-",
    meaning: "shade, shadow",
    origin: "Latin",
    etymology: "umbra",
    examples: "penumbra, umbrella"
  },
  {
    root: "un-",
    meaning: "one",
    origin: "Latin",
    etymology: "unus, unius",
    examples: "unary, unicorn, union"
  },
  {
    root: "unc-",
    meaning: "hooked",
    origin: "Latin",
    etymology: "uncus",
    examples: "uncinate"
  },
  {
    root: "unci-",
    meaning: "ounce, twelfth",
    origin: "Latin",
    etymology: "uncia",
    examples: "uncial"
  },
  {
    root: "und-",
    meaning: "wave",
    origin: "Latin",
    etymology: "unda",
    examples: "abundant, undulate"
  },
  {
    root: "undecim-",
    meaning: "eleventh",
    origin: "Latin",
    etymology: "undecimus",
    examples: "undecimal"
  },
  {
    root: "unden-",
    meaning: "eleven each",
    origin: "Latin",
    etymology: "undeni",
    examples: "undenary"
  },
  {
    root: "ungui-",
    meaning: "claw, nail",
    origin: "Latin",
    etymology: "unguis"
  },
  {
    root: "ungul-",
    meaning: "claw, hoof",
    origin: "Latin",
    etymology: "ungula",
    examples: "ungulate"
  },
  {
    root: "ur-, uro-",
    meaning: "tail",
    origin: "Greek",
    etymology: "οὐρά (oura)",
    examples: "uroid, uroborus"
  },
  {
    root: "ur-, uro-",
    meaning: "urine",
    origin: "Greek",
    etymology: "οὖρον (ouron)",
    examples: "urology"
  },
  {
    root: "urb-",
    meaning: "city",
    origin: "Latin",
    etymology: "urbs, urbis",
    examples: "urban, urbanize, suburbanite, urbanism"
  },
  {
    root: "urg-",
    meaning: "work",
    origin: "Latin",
    etymology: "urgere",
    examples: "urgent"
  },
  {
    root: "urs-",
    meaning: "bear",
    origin: "Latin",
    etymology: "ursus",
    examples: "Ursa Major, ursine"
  },
  {
    root: "ut-, us-",
    meaning: "use",
    origin: "Latin",
    etymology: "uti, usus",
    examples: "usual, utility"
  },
  {
    root: "uv-",
    meaning: "grape",
    origin: "Latin",
    etymology: "uva",
    examples: "uvea"
  },
  {
    root: "uxor-",
    meaning: "wife",
    origin: "Latin",
    etymology: "uxor",
    examples: "uxoricide"
  },
  {
    root: "vac-",
    meaning: "empty",
    origin: "Latin",
    etymology: "vacare",
    examples: "vacancy, vacation, vacuum"
  },
  {
    root: "vad-, vas-",
    meaning: "go",
    origin: "Latin",
    etymology: "vadere",
    examples: "evade, pervasive"
  },
  {
    root: "vag-",
    meaning: "wander",
    origin: "Latin",
    etymology: "vagus, vagare",
    examples: "vagabond, vague"
  },
  {
    root: "van-",
    meaning: "empty, vain, idle",
    origin: "Latin",
    etymology: "vanus",
    examples: "vanity"
  },
  {
    root: "vap-",
    meaning: "lack (of)",
    origin: "Latin",
    etymology: "vapor",
    examples: "evaporation, vapid, vaporize"
  },
  {
    root: "veh-, vect-",
    meaning: "carry",
    origin: "Latin",
    etymology: "vehere, vectus",
    examples: "vehicle, vector"
  },
  {
    root: "vel-",
    meaning: "veil",
    origin: "Latin",
    etymology: "velum",
    examples: "revelation, velate"
  },
  {
    root: "vell-, vuls-",
    meaning: "pull",
    origin: "Latin",
    etymology: "vellere, vulsus",
    examples: "convulsion"
  },
  {
    root: "veloc-",
    meaning: "quick",
    origin: "Latin",
    etymology: "velox, velocis",
    examples: "velocity"
  },
  {
    root: "ven-",
    meaning: "vein",
    origin: "Latin",
    etymology: "vena",
    examples: "venosity"
  },
  {
    root: "ven-",
    meaning: "hunt",
    origin: "Latin",
    etymology: "venari",
    examples: "venison"
  },
  {
    root: "ven-, vent-",
    meaning: "come",
    origin: "Latin",
    etymology: "venire",
    examples: "advent, convention"
  },
  {
    root: "vend-",
    meaning: "sell",
    origin: "Latin",
    etymology: "vendere",
    examples: "vendor, vending"
  },
  {
    root: "vener-",
    meaning: "respectful",
    origin: "Latin",
    etymology: "venus",
    examples: "veneration, venereal"
  },
  {
    root: "vent-",
    meaning: "wind",
    origin: "Latin",
    etymology: "ventus",
    examples: "ventilation"
  },
  {
    root: "ventr-",
    meaning: "belly",
    origin: "Latin",
    etymology: "venter",
    examples: "ventral"
  },
  {
    root: "ver-",
    meaning: true,
    origin: "Latin",
    etymology: "verus",
    examples: "aver, veracious, verify, verisimilitude, verity"
  },
  {
    root: "verb-",
    meaning: "word",
    origin: "Latin",
    etymology: "verbum",
    examples: "verbal, verbatim, verbosity"
  },
  {
    root: "verber-",
    meaning: "whip",
    origin: "Latin",
    etymology: "verber",
    examples: "reverberation"
  },
  {
    root: "verm-",
    meaning: "worm",
    origin: "Latin",
    etymology: "vermis",
    examples: "vermiform"
  },
  {
    root: "vern-",
    meaning: "spring",
    origin: "Latin",
    etymology: "ver, vernus",
    examples: "vernal"
  },
  {
    root: "vert-, vers-",
    meaning: "turn",
    origin: "Latin",
    etymology: "vertere, versus",
    examples: "convert, inversion, invert, vertical"
  },
  {
    root: "vesic-",
    meaning: "bladder",
    origin: "Latin",
    etymology: "vesica",
    examples: "vesical"
  },
  {
    root: "vesper-",
    meaning: "evening, western",
    origin: "Latin",
    etymology: "vespera",
    examples: "vesperal"
  },
  {
    root: "vest-",
    meaning: "clothe, garment",
    origin: "Latin",
    etymology: "vestis",
    examples: "divest, vest"
  },
  {
    root: "vestig-",
    meaning: "track",
    origin: "Latin",
    etymology: "vestigium",
    examples: "investigate"
  },
  {
    root: "vet-",
    meaning: "forbid",
    origin: "Latin",
    etymology: "vetare",
    examples: "veto"
  },
  {
    root: "veter-",
    meaning: "old",
    origin: "Latin",
    etymology: "vetus, veteris",
    examples: "inveterate, veteran"
  },
  {
    root: "vi-",
    meaning: "way",
    origin: "Latin",
    etymology: "via",
    examples: "deviate, obvious, via"
  },
  {
    root: "vic-",
    meaning: "change",
    origin: "Latin",
    etymology: "vicis",
    examples: "vice versa, vicissitude"
  },
  {
    root: "vicen-, vigen-",
    meaning: "twenty",
    origin: "Latin",
    etymology: "viceni",
    examples: "vicenary"
  },
  {
    root: "vicesim-, vigesim-",
    meaning: "twentieth",
    origin: "Latin",
    etymology: "vicesimus",
    examples: "vicesimary, vicesimation, vigesimal"
  },
  {
    root: "vid-, vis-",
    meaning: "see",
    origin: "Latin",
    etymology: "videre, visus",
    examples: "video, vision"
  },
  {
    root: "vil-",
    meaning: "cheap",
    origin: "Latin",
    etymology: "vilis",
    examples: "vile, vilify"
  },
  {
    root: "vill-",
    meaning: "shaggy hair, velvet",
    origin: "Latin",
    etymology: "villus",
    examples: "villiform"
  },
  {
    root: "vin-",
    meaning: "wine",
    origin: "Latin",
    etymology: "vinum",
    examples: "vinous"
  },
  {
    root: "vinc-, vict-",
    meaning: "conquer",
    origin: "Latin",
    etymology: "vincere, victus",
    examples: "invincible, victory"
  },
  {
    root: "vir-",
    meaning: "man",
    origin: "Latin",
    etymology: "vir",
    examples: "virility"
  },
  {
    root: "vir-",
    meaning: "green",
    origin: "Latin",
    etymology: "virere",
    examples: "virid, viridian"
  },
  {
    root: "visc-",
    meaning: "thick",
    origin: "Latin",
    etymology: "viscum",
    examples: "viscosity"
  },
  {
    root: "viscer-",
    meaning: "organs of the body cavity",
    origin: "Latin",
    etymology: "viscus, visceris",
    examples: "eviscerate, visceral"
  },
  {
    root: "vit-",
    meaning: "life",
    origin: "Latin",
    etymology: "vita",
    examples: "vital, vitamin"
  },
  {
    root: "vitell-",
    meaning: "yolk",
    origin: "Latin",
    etymology: "vitellus",
    examples: "vitellogenesis"
  },
  {
    root: "viti-",
    meaning: "fault",
    origin: "Latin",
    etymology: "vitium",
    examples: "vice, vitiate"
  },
  {
    root: "vitr-",
    meaning: "glass",
    origin: "Latin",
    etymology: "vitrum",
    examples: "vitreous"
  },
  {
    root: "viv-",
    meaning: "live",
    origin: "Latin",
    etymology: "vivere",
    examples: "revive, survive, vivid"
  },
  {
    root: "voc-",
    meaning: "voice",
    origin: "Latin",
    etymology: "vox, vocis",
    examples: "provocative, vocal, vocation"
  },
  {
    root: "vol-",
    meaning: "fly",
    origin: "Latin",
    etymology: "volare",
    examples: "volatility"
  },
  {
    root: "vol-",
    meaning: "wish",
    origin: "Latin",
    etymology: "velle",
    examples: "volition"
  },
  {
    root: "volv-, volut-",
    meaning: "roll",
    origin: "Latin",
    etymology: "volvere, volutus",
    examples: "convolution, revolve"
  },
  {
    root: "vom-",
    meaning: "discharge",
    origin: "Latin",
    etymology: "vomere",
    examples: "vomit"
  },
  {
    root: "vor-, vorac-",
    meaning: "swallow",
    origin: "Latin",
    etymology: "vorare, vorax",
    examples: "devour, voracious"
  },
  {
    root: "vov-, vot-",
    meaning: "vow",
    origin: "Latin",
    etymology: "vovere, votus",
    examples: "votive"
  },
  {
    root: "vulg-",
    meaning: "common, crowd",
    origin: "Latin",
    etymology: "vulgus",
    examples: "divulge, vulgarity, vulgate"
  },
  {
    root: "vulner-",
    meaning: "wound",
    origin: "Latin",
    etymology: "vulnus, vulneris",
    examples: "vulnerable"
  },
  {
    root: "vulp-",
    meaning: "fox",
    origin: "Latin",
    etymology: "vulpes, vulpis",
    examples: "vulpine"
  },
  {
    root: "xanth-",
    meaning: "yellow",
    origin: "Greek",
    etymology: "ξάνθος (xanthos)",
    examples: "xanthogenic"
  },
  {
    root: "xen-",
    meaning: "foreign",
    origin: "Greek",
    etymology: "ξένος (xenos)",
    examples: "xenophobia"
  },
  {
    root: "xer-",
    meaning: "dry",
    origin: "Greek",
    etymology: "ξηρός (xēros)",
    examples: "xerography, xerophyte"
  },
  {
    root: "xiph-",
    meaning: "sword",
    origin: "Greek",
    etymology: "ξίφος (xiphos)",
    examples: "xiphoid"
  },
  {
    root: "xyl-",
    meaning: "wood",
    origin: "Greek",
    etymology: "ξύλον (xulon)",
    examples: "xylem, xylophone"
  },
  {
    root: "zo-",
    meaning: "animal, living being",
    origin: "Greek",
    etymology: "ζῷον (zōion)",
    examples: "protozoa, zoo, zoology"
  },
  {
    root: "zon-",
    meaning: "belt, girdle",
    origin: "Greek",
    etymology: "ζώνη (zōnē)",
    examples: "zone"
  },
  {
    root: "zyg-",
    meaning: "yoke",
    origin: "Greek",
    etymology: "ζυγός (zugon)",
    examples: "heterozygous, zygote"
  },
  {
    root: "zym-",
    meaning: "ferment",
    origin: "Greek",
    etymology: "ζύμη (zumē)",
    examples: "enzyme, lysozyme"
  }
];
export { words };
