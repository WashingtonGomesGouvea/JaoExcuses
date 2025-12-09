"use client"

import { Button } from "@/components/ui/button"
import { useState, useEffect, useRef } from "react"
import { Share2, Sparkles, PartyPopper, Baby, Volume2, VolumeX } from "lucide-react"

const excuseDatabase = {
  sono: [
    "Joãozinho acordou chorando do nada, precisei sair da call pra niná-lo de volta pro sono! 😴👶",
    "O bebê tá em uma maratona de noites sem dormir, não deu pra continuar o jogo hoje. 🌙💤",
    "Joãozinho puxou uma soneca interrompida, aí sumi pra acalmá-lo rapidinho. 😪",
    "Precisei embalar o Joãozinho às pressas, a call teve que esperar. 🎵👶",
    "Joãozinho tá com sono agitado, não consigo ficar na call enquanto ele não descansa. 😫",
    "O bebê chorou alto de repente, saí correndo pra ver o que era. 😭",
    "Joãozinho tá lutando contra o sono, precisei ajudar e sumir do jogo. 💪😴",
    "Precisei contar historinhas pro Joãozinho dormir, aí a call terminou pra mim. 📖",
    "Joãozinho acordou com pesadelo, não deu pra voltar pro jogo. 😱",
    "O bebê tá em modo insônia, saí da call pra tentar fazê-lo pegar no sono. 🌃",
    "Joãozinho rolou da cama chorando, precisei sair urgente. 🛏️",
    "Precisei trocar o pijama molhado do Joãozinho, sumi no meio da call. 👕",
    "Joãozinho tá com sono leve, qualquer barulho acorda e eu tenho que ir. 🤫",
    "O bebê pediu colo pra dormir, não pude continuar jogando. 🤗",
    "Joãozinho tá em fase de acordar cedo, saí da call pra atendê-lo. ⏰",
  ],
  alimentacao: [
    "Vou dar comida pro Joãozinho, ele tá chorando de fome e precisei sair da call agora! 🍽️👶",
    "Joãozinho derrubou a papinha no chão, sumi pra limpar a bagunça. 🥄💥",
    "Precisei preparar a mamadeira do Joãozinho, o jogo teve que pausar. 🍼",
    "Joãozinho tá mastigando devagar, não dá pra ficar na call enquanto ajudo. 😋",
    "O bebê tá com fome repentina, saí correndo pra alimentá-lo. 🏃",
    "Vou dar frutinha pro Joãozinho, ele tá agitado e preciso acalmá-lo. 🍌🍎",
    "Joãozinho engasgou com a comida, precisei sair urgente da call. 😰",
    "Precisei aquecer o leite pro Joãozinho, sumi por uns minutos. 🔥🥛",
    "O bebê tá em hora do lanche, não consigo jogar enquanto ele come. 🍪",
    "Joãozinho jogou a colher longe, saí pra pegar e limpar. 🥄✈️",
    "Vou dar sopinha pro Joãozinho, ele tá faminto como um leãozinho. 🦁🍲",
    "Joãozinho tá recusando a comida, precisei insistir e sair do jogo. 🙅",
    "O bebê derramou tudo no colo, sumi pra trocar a roupa dele. 💦👕",
    "Precisei cortar as frutinhas pro Joãozinho, a call interrompeu. 🔪🍓",
    "Joãozinho tá em fase de experimentar sabores novos, saí pra supervisionar. 👅",
  ],
  medicas: [
    "Vou levar o Joãozinho no médico, ele tá com febrinha e precisei sair da call rapidinho! 🌡️👨‍⚕️",
    "Joãozinho pegou um resfriado, sumi pra dar remédio. 🤧💊",
    "Precisei medir a temperatura do Joãozinho, o jogo esperará. 🌡️",
    "O bebê tá com cólica forte, não dá pra ficar na call agora. 😣",
    "Joãozinho precisa de vacina hoje, saí pra levá-lo. 💉",
    "Vou checar se o Joãozinho tá bem, ele chorou diferente. 🩺",
    "Joãozinho tá com dente nascendo, precisei acalmá-lo e sumir. 🦷",
    "Precisei ligar pro pediatra pro Joãozinho, a call parou. 📞",
    "O bebê tá tossindo, saí urgente pra ver o que é. 😷",
    "Joãozinho caiu e machucou o joelho, não pude continuar jogando. 🤕",
    "Vou passar pomada no Joãozinho, ele tá com assadura. 🧴",
    "Joãozinho tá com nariz entupido, sumi pra aspirar. 👃",
    "Precisei dar xarope pro Joãozinho, a call teve que acabar. 🥄",
    "O bebê tá inquieto por causa da barriga, saí pra massagear. 💆",
    "Joãozinho precisa de consulta, não deu pra jogar hoje. 🏥",
  ],
  banho: [
    "Vou dar banho no Joãozinho, ele tá sujo de papinha e precisei sair da call agora! 🛁👶",
    "Joãozinho splashou água pra todo lado, sumi pra secar tudo. 💦",
    "Precisei encher a banheira pro Joãozinho, o jogo pausou. 🚿",
    "O bebê tá em hora do banho relaxante, não consigo ficar na call. 🧼",
    "Vou lavar o cabelinho do Joãozinho, saí rapidinho. 🧴",
    "Joãozinho tá brincando com patinhos no banho, precisei supervisionar. 🦆",
    "Precisei enxugar o Joãozinho, sumi por causa da bagunça molhada. 🧻",
    "O bebê tá com espuma na cabeça, não dá pra voltar pro jogo. 🫧",
    "Vou dar banho rápido no Joãozinho, mas ele demora pra cooperar. ⏱️",
    "Joãozinho escorregou na banheira, saí urgente pra ajudar. 😱",
    "Precisei trocar a água suja do banho do Joãozinho. 🚰",
    "O bebê tá chorando no banho frio, sumi pra aquecer. 🥶",
    "Vou passar shampoo no Joãozinho, a call interrompeu. 🧴",
    "Joãozinho tá em modo bolhas infinitas, precisei ficar. 🫧✨",
    "Precisei secar o chão molhado depois do banho do Joãozinho. 🧹",
  ],
  brincadeiras: [
    "Joãozinho quer brincar agora, precisei sair da call pra empurrar o carrinho com ele! 🚗👶",
    "O bebê tá pulando no colo, sumi pra não deixar cair. 🦘",
    "Precisei montar bloquinhos pro Joãozinho, o jogo esperará. 🧱",
    "Joãozinho tá rindo com cócegas, não dá pra ficar na call. 😂",
    "Vou ler um livrinho pro Joãozinho, saí rapidinho. 📚",
    "O bebê tá engatinhando pra longe, precisei correr atrás. 🏃",
    "Joãozinho derrubou os brinquedos, sumi pra arrumar. 🧸",
    "Precisei balançar o Joãozinho no colo, a call parou. 🎵",
    "O bebê tá em fase de explorar tudo, saí pra vigiar. 🔍",
    "Joãozinho quer dançar, não pude continuar jogando. 💃",
    "Vou brincar de esconde-esconde com o Joãozinho. 🙈",
    "Joãozinho tá batendo palminhas, sumi pra participar. 👏",
    "Precisei empilhar torres pro Joãozinho, a call acabou. 🏗️",
    "O bebê tá rindo alto, saí pra não distrair. 😄",
    "Joãozinho quer colo pra brincar, precisei atender. 🤗",
  ],
  gerais: [
    "Não dá por causa do Joãozinho, ele chorou de repente e saí da call! 😭",
    "Joãozinho tá agitado hoje, sumi pra acalmá-lo. 😤",
    "Precisei trocar a fralda do Joãozinho urgente. 🚼",
    "O bebê tá querendo atenção, não consigo jogar agora. 👀",
    "Joãozinho caiu do sofá, saí correndo pra ver. 🛋️",
    "Vou passear com o Joãozinho, a call teve que esperar. 🚶",
    "Joãozinho tá com manha, precisei mimá-lo. 🥺",
    "O bebê derrubou o vaso, sumi pra limpar. 🏺💥",
    "Precisei dar colo pro Joãozinho choramingando. 😢",
    "Joãozinho tá em modo birrento, saí pra resolver. 😠",
    "Não deu pra continuar, Joãozinho pediu pra ficar com ele. 🤝",
    "O bebê tá resmungando, precisei sair da call. 😒",
    "Joãozinho machucou o dedinho, sumi pra beijar. 💋",
    "Precisei arrumar o quarto bagunçado pelo Joãozinho. 🧹",
    "Joãozinho tá feliz pulando, saí pra brincar junto. 🎉",
  ],
  festaFimDeAno: [
    "A virada do ano vai ser assistindo Peppa Pig com o Joãozinho, não dá pra ir na festa! 🐷🎆",
    "OPEN BAR na confraternização? Pena que meu OPEN BAR é mamadeira do Joãozinho às 3h! 🍺🍼",
    "O RH mandou convite, mas o Joãozinho mandou cólica. Quem vence? CÓLICA! 📧😭",
    "Happy hour virou Sad Hour desde que o Joãozinho nasceu! 🍺😢",
    "Confraternização corporativa? Minha única confraternização é com fraldas e mamadeira! 🤝🍼",
    "Ceia de Natal? Vou comer resto de papinha às 2 da manhã enquanto embalo o bebê! 🍗👶🌙",
    "Amigo secreto? Meu único presente é o Joãozinho acordando às 4h! 🎁⏰",
    "Reveillon na praia? Só se for na banheira do Joãozinho! 🏖️🛁",
    "Fogos de artifício? O Joãozinho VAI ACORDAR e EU vou pagar o pato! 🎆😭",
    "Champagne à meia-noite? Vou estar dando mamadeira morna! 🍾🍼",
    "Vestido de gala? Vou de roupa com manchas de papinha mesmo! 👗🥄",
    "A festa da firma é das 19h às 2h? Perfeito, horário do Joãozinho chorar! ⏰😭",
    "Karaokê na confraternização? Minha voz já tá rouca de cantar ninar! 🎤😴",
    "Sorteio de prêmios? Meu prêmio é o Joãozinho dormindo 4 horas seguidas! 🎰💤",
    "DJ tocando até amanhecer? O Joãozinho já faz isso todo dia! 🎧👶",
    "Buffet liberado? Meu buffet é papinha de frango às 23h! 🍽️🍗",
    "Dança até o sol raiar? Danço embalando Joãozinho a noite toda! 💃🌅",
    "Bônus de fim de ano? Gastei tudo em fralda premium! 💰🚼",
    "Selfie com o chefe? Prefiro selfie com o Joãozinho babando! 📸🤤",
    "Brinde com os colegas? Brindo leite NAN com o Joãozinho! 🥂🍼",
    "Uber pra festa? Uber pra farmácia buscar Neosaldina pra mim! 🚗💊",
    "Look arrasador? Arrasador é a olheira que tenho! 👔😴",
    "Pista de dança? Minha pista é o corredor indo pro quarto do bebê! 🕺🚶",
    "Petiscos gourmet? Estou comendo biscoito Maria às 3h! 🍪🌙",
    "Networking na festa? Meu network é com outras mães de UTI neonatal! 🤝👩‍👧",
    "Premiação de funcionários? Mereço prêmio por não dormir 8 meses! 🏆😵",
    "Banda ao vivo? Ao vivo só choro do Joãozinho mesmo! 🎸😭",
    "Decoração natalina? Minha decoração é fralda secando no varal! 🎄👶",
    "Comes e bebes? Come papinha, bebe leite, é isso! 🍴🍼",
    "Foto oficial? Com essa cara de zumbi? Acho que não! 📷🧟",
    "Roupa nova pro réveillon? Gastei em body do Joãozinho! 👕👶",
    "Contagem regressiva? 10, 9, 8... segundos até o bebê chorar! ⏱️😭",
    "Beijo à meia-noite? Beijo na testa do Joãozinho dormindo! 💋👶",
    "Promessas de ano novo? Prometo tentar dormir 6 horas por noite! 🙏💤",
    "Festa temática? Meu tema é 'Pai Exausto de Primeira Viagem'! 🎭😴",
    "Open food? Meu open é papinha de diversos sabores! 🍲👶",
    "Música alta até tarde? O Joãozinho já faz esse show toda noite! 🔊😭",
    "Sobremesa especial? Mingau de aveia às 2h da manhã! 🍮🌙",
    "Transporte executivo? Carrinho de bebê premium! 🚗👶",
    "Dress code: social? Meu código é: roupa que pode sujar! 👔💦",
    "VIP da festa? VIP só se for no quartinho do Joãozinho! 🎟️🛏️",
    "After da confraternização? Meu after é trocar fralda às 6h! 🌅🚼",
  ],
}

const companyPartyResponses = [
  {
    text: "MINHA MULHER NÃO DEIXA EU IR NA FESTA DA EMPRESA! ELA DIZ QUE É PRA EU FICAR COM O JOÃOZINHO E EVITAR CONFUSÕES NO CASAMENTO! 😠💔👨‍👩‍👦",
    type: "wife",
    probability: 0.25,
  },
  {
    text: "ALMOÇO 2",
    type: "lunch",
    probability: 0.15,
  },
  {
    text: "FESTA CANCELADA POR CHORO DO JOÃOZINHO NO COLO! 😭👶",
    type: "rare",
    probability: 0.1,
  },
  {
    text: "MULHER DISSE: PRIORIZE O JOÃOZINHO, NÃO OS PETISCOS DA FESTA! 🍗❌",
    type: "rare",
    probability: 0.1,
  },
  {
    text: "JOÃOZINHO TÁ COM SONO, NÃO POSSO SAIR DE CASA! 😴🏠",
    type: "rare",
    probability: 0.1,
  },
  {
    text: "SE VOCÊ ACHA QUE O ANO ESTAVA ACABANDO E AS DESCULPAS TAMBÉM, ESTÁ ENGANADO! O JÃO SEMPRE TEM NOVAS DESCULPAS! 🎭🔄",
    type: "epic",
    probability: 0.08,
  },
  {
    text: "ESSE ANO NÃO VAI... ANO QUE VEM TALVEZ... QUEM SABE EM 2030 QUANDO O JOÃOZINHO TIVER 5 ANOS! 📅🤡",
    type: "epic",
    probability: 0.07,
  },
  {
    text: "FESTA? MINHA ROTINA É: 18H - PAPINHA, 19H - BANHO, 20H - SONO, 21H - MINHA VIDA SOCIAL MORREU! ⚰️💀",
    type: "epic",
    probability: 0.05,
  },
  {
    text: "A ÚNICA VIRADA QUE VOU TER É DO JOÃOZINHO NA CAMA! FELIZ ANO NOVO? SÓ SE DORMIR 8 HORAS! 🛏️🎆",
    type: "epic",
    probability: 0.05,
  },
  {
    text: "CEIA DE NATAL? VOU COMER RESTO DE PAPINHA ÀS 2 DA MANHÃ ENQUANTO EMBALO O BEBÊ! 🍗👶🌙",
    type: "epic",
    probability: 0.05,
  },
]

export default function HomePage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [currentExcuse, setCurrentExcuse] = useState("")
  const [showTimer, setShowTimer] = useState(false)
  const [timerCount, setTimerCount] = useState(10)
  const [excuseCount, setExcuseCount] = useState(0)
  const [isDarkMode, setIsDarkMode] = useState(false)
  const [progressLevel, setProgressLevel] = useState(0)
  const [showPartyResponse, setShowPartyResponse] = useState(false)
  const [partyResponseText, setPartyResponseText] = useState("")
  const [partyResponseType, setPartyResponseType] = useState("")
  const [saturdayClicks, setSaturdayClicks] = useState(0)
  const [tuesdayHoldTimer, setTuesdayHoldTimer] = useState<NodeJS.Timeout | null>(null)
  const [infiniteMode, setInfiniteMode] = useState(false)
  const [infiniteExcuses, setInfiniteExcuses] = useState<string[]>([])
  const [customExcuse, setCustomExcuse] = useState("")
  const [favoriteExcuses, setFavoriteExcuses] = useState<string[]>([])

  const [isMounted, setIsMounted] = useState(false)
  const [floatingEmojis, setFloatingEmojis] = useState<
    Array<{ left: number; top: number; delay: number; duration: number; size: number; emoji: string }>
  >([])
  const [christmasEmojis, setChristmasEmojis] = useState<Array<{ left: number; delay: number; emoji: string }>>([])

  const [showChaosModal, setShowChaosModal] = useState(false)
  const [chaosConfetti, setChaosConfetti] = useState<Array<{ left: number; delay: number; color: string }>>([])
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)
  const audioRef = useRef<HTMLIFrameElement>(null)

  const [showYearEndBanner, setShowYearEndBanner] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const emojis = ["👶", "🍼", "🧸", "🎈", "⭐"]
    const generated = [...Array(15)].map(() => ({
      left: Math.random() * 100,
      top: Math.random() * 100,
      delay: Math.random() * 5,
      duration: 10 + Math.random() * 10,
      size: 20 + Math.random() * 30,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
    }))
    setFloatingEmojis(generated)

    const xmasEmojis = ["🎄", "🎅", "⭐", "🎁", "❄️"]
    const xmasGenerated = [...Array(10)].map(() => ({
      left: Math.random() * 100,
      delay: Math.random() * 3,
      emoji: xmasEmojis[Math.floor(Math.random() * xmasEmojis.length)],
    }))
    setChristmasEmojis(xmasGenerated)
  }, [])

  useEffect(() => {
    const checkTime = () => {
      const hour = new Date().getHours()
      setIsDarkMode(hour >= 20 || hour < 6)
    }
    checkTime()
    const interval = setInterval(checkTime, 60000)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const saved = localStorage.getItem("joaoFavorites")
    if (saved) setFavoriteExcuses(JSON.parse(saved))
  }, [])

  useEffect(() => {
    if (showTimer && timerCount > 0) {
      const timer = setTimeout(() => setTimerCount(timerCount - 1), 1000)
      return () => clearTimeout(timer)
    } else if (timerCount === 0) {
      setShowTimer(false)
      setTimerCount(10)
    }
  }, [showTimer, timerCount])

  useEffect(() => {
    if (excuseCount >= 3) {
      setShowYearEndBanner(true)
    }
  }, [excuseCount])

  useEffect(() => {
    if (progressLevel >= 100 && !showChaosModal) {
      const confetti = [...Array(50)].map(() => ({
        left: Math.random() * 100,
        delay: Math.random() * 2,
        color: ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff"][Math.floor(Math.random() * 6)],
      }))
      setChaosConfetti(confetti)
      setShowChaosModal(true)
      setIsMusicPlaying(true)
    }
  }, [progressLevel, showChaosModal])

  const generateExcuse = () => {
    const categories = Object.keys(excuseDatabase)
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]
    const categoryExcuses = excuseDatabase[randomCategory as keyof typeof excuseDatabase]
    const randomExcuse = categoryExcuses[Math.floor(Math.random() * categoryExcuses.length)]

    setCurrentExcuse(randomExcuse)
    setShowTimer(true)
    setTimerCount(10)
    setExcuseCount(excuseCount + 1)
    setProgressLevel(Math.min(100, progressLevel + Math.random() * 20))
  }

  const generateYearEndExcuse = () => {
    const excuses = excuseDatabase.festaFimDeAno
    const randomExcuse = excuses[Math.floor(Math.random() * excuses.length)]
    setCurrentExcuse(randomExcuse)
    setShowTimer(true)
    setTimerCount(10)
    setExcuseCount(excuseCount + 1)
    setProgressLevel(Math.min(100, progressLevel + Math.random() * 20))
  }

  const handleCompanyParty = () => {
    const random = Math.random()
    let cumulativeProbability = 0

    for (const response of companyPartyResponses) {
      cumulativeProbability += response.probability
      if (random <= cumulativeProbability) {
        setPartyResponseText(response.text)
        setPartyResponseType(response.type)
        setShowPartyResponse(true)
        setTimeout(() => setShowPartyResponse(false), 5000)
        return
      }
    }
  }

  const handleSaturday = () => {
    setSaturdayClicks(saturdayClicks + 1)
    if (saturdayClicks + 1 === 4) {
      setCurrentExcuse("FIM DE SEMANA CAÓTICO COM O JOÃOZINHO DOMINANDO A CASA! 🏠👶💥")
      setShowTimer(true)
      setSaturdayClicks(0)
    } else {
      generateExcuse()
    }
  }

  const handleTuesdayMouseDown = () => {
    const timer = setTimeout(() => {
      setCurrentExcuse("JOÃOZINHO TÁ EM CRISE DE CHORO SEMANAL, SAÍ PRA RESGATAR A PAZ! 😭🕊️")
      setShowTimer(true)
    }, 2000)
    setTuesdayHoldTimer(timer)
  }

  const handleTuesdayMouseUp = () => {
    if (tuesdayHoldTimer) {
      clearTimeout(tuesdayHoldTimer)
      setTuesdayHoldTimer(null)
    }
  }

  const toggleInfiniteMode = () => {
    if (!infiniteMode) {
      setInfiniteMode(true)
      const interval = setInterval(() => {
        const categories = Object.keys(excuseDatabase)
        const randomCategory = categories[Math.floor(Math.random() * categories.length)]
        const categoryExcuses = excuseDatabase[randomCategory as keyof typeof excuseDatabase]
        const randomExcuse = categoryExcuses[Math.floor(Math.random() * categoryExcuses.length)]
        setInfiniteExcuses((prev) => [...prev, randomExcuse].slice(-10))
      }, 3000)
      return () => clearInterval(interval)
    } else {
      setInfiniteMode(false)
      setInfiniteExcuses([])
    }
  }

  const generateCustomExcuse = () => {
    if (!customExcuse.trim()) return
    const categories = Object.keys(excuseDatabase)
    const randomCategory = categories[Math.floor(Math.random() * categories.length)]
    const categoryExcuses = excuseDatabase[randomCategory as keyof typeof excuseDatabase]
    const baseExcuse = categoryExcuses[Math.floor(Math.random() * categoryExcuses.length)]
    setCurrentExcuse(`${baseExcuse.split(",")[0]}, ${customExcuse}! 👶`)
    setShowTimer(true)
    setCustomExcuse("")
  }

  const saveFavorite = () => {
    if (currentExcuse && !favoriteExcuses.includes(currentExcuse)) {
      const newFavorites = [...favoriteExcuses, currentExcuse]
      setFavoriteExcuses(newFavorites)
      localStorage.setItem("joaoFavorites", JSON.stringify(newFavorites))
    }
  }

  const shareExcuse = () => {
    if (navigator.share && currentExcuse) {
      navigator.share({
        title: "Desculpa do João",
        text: currentExcuse,
        url: window.location.href,
      })
    } else if (currentExcuse) {
      navigator.clipboard.writeText(currentExcuse)
      alert("Desculpa copiada!")
    }
  }

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying)
  }

  const weekdays = [
    { name: "Segunda", color: "bg-gray-500 hover:bg-gray-600", action: generateExcuse },
    { name: "Terça", color: "bg-blue-500 hover:bg-blue-600", action: generateExcuse, special: true },
    { name: "Quarta", color: "bg-green-500 hover:bg-green-600", action: generateExcuse },
    { name: "Quinta", color: "bg-purple-500 hover:bg-purple-600", action: generateExcuse },
    { name: "Sexta", color: "bg-pink-500 hover:bg-pink-600", action: generateExcuse },
    { name: "Sábado", color: "bg-orange-500 hover:bg-orange-600", action: handleSaturday },
    { name: "Domingo", color: "bg-yellow-500 hover:bg-yellow-600", action: generateExcuse },
  ]

  if (!isMounted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50 flex items-center justify-center">
        <div className="text-4xl animate-bounce">👶</div>
      </div>
    )
  }

  return (
    <div
      className={`min-h-screen transition-colors duration-1000 ${isDarkMode ? "bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900" : "bg-gradient-to-br from-blue-50 via-pink-50 to-yellow-50"}`}
    >
      <button
        onClick={toggleMusic}
        className="fixed top-4 right-4 z-50 p-3 rounded-full bg-gradient-to-r from-red-500 to-green-500 text-white shadow-lg hover:scale-110 transition-transform"
        title={isMusicPlaying ? "Pausar música" : "Tocar música"}
      >
        {isMusicPlaying ? <Volume2 className="w-6 h-6" /> : <VolumeX className="w-6 h-6" />}
      </button>

      {isMusicPlaying && (
        <iframe
          ref={audioRef}
          className="hidden"
          src="https://www.youtube.com/embed/44tiZ7IP7zA?autoplay=1&loop=1"
          allow="autoplay"
        />
      )}

      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        {floatingEmojis.map((item, i) => (
          <div
            key={i}
            className="absolute animate-float"
            style={{
              left: `${item.left}%`,
              top: `${item.top}%`,
              animationDelay: `${item.delay}s`,
              animationDuration: `${item.duration}s`,
              fontSize: `${item.size}px`,
              opacity: 0.3,
            }}
          >
            {item.emoji}
          </div>
        ))}

        {christmasEmojis.map((item, i) => (
          <div
            key={`xmas-${i}`}
            className="absolute animate-snow"
            style={{
              left: `${item.left}%`,
              animationDelay: `${item.delay}s`,
              fontSize: "24px",
              opacity: 0.5,
            }}
          >
            {item.emoji}
          </div>
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-8 max-w-6xl">
        <header className="text-center mb-8">
          <h1 className={`text-5xl md:text-7xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Desculpas do João 2.0 👶
          </h1>
          <p className={`text-xl md:text-2xl ${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>
            O Joãozinho sempre tem uma desculpa nova!
          </p>
        </header>

        {showYearEndBanner && (
          <div className="mb-8 p-4 rounded-xl bg-gradient-to-r from-red-600 via-green-600 to-red-600 animate-pulse-slow shadow-2xl">
            <p className="text-white text-center text-lg md:text-xl font-bold">
              🎄 Se você acha que o ano estava acabando e as desculpas também... ESTÁ ENGANADO! 🎅
            </p>
            <p className="text-yellow-200 text-center text-sm md:text-base mt-2">
              O Jão SEMPRE tem novas desculpas! Esse ano ele não vai na festa... de novo! 🎉❌
            </p>
          </div>
        )}

        <div className={`mb-8 p-4 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm`}>
          <div className="flex items-center justify-between mb-2">
            <span className={`font-semibold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Nível de Desculpas: Bebê Mode Ativado
            </span>
            <span className={`${isDarkMode ? "text-gray-300" : "text-gray-600"}`}>{Math.round(progressLevel)}%</span>
          </div>
          <div className={`h-4 rounded-full overflow-hidden ${isDarkMode ? "bg-gray-700" : "bg-gray-200"}`}>
            <div
              className={`h-full transition-all duration-500 flex items-center justify-around ${progressLevel >= 100 ? "bg-gradient-to-r from-red-500 via-yellow-500 to-red-500 animate-rainbow-bg" : "bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500"}`}
              style={{ width: `${progressLevel}%` }}
            >
              {[...Array(Math.floor(progressLevel / 10))].map((_, i) => (
                <span key={i} className="text-xs">
                  🍼
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-7 gap-4 mb-8">
          {weekdays.map((day, index) => (
            <Button
              key={day.name}
              className={`${day.color} text-white font-bold py-6 rounded-xl shadow-lg hover:scale-105 transition-transform text-lg`}
              onClick={day.action}
              onMouseDown={day.special ? handleTuesdayMouseDown : undefined}
              onMouseUp={day.special ? handleTuesdayMouseUp : undefined}
              onMouseLeave={day.special ? handleTuesdayMouseUp : undefined}
            >
              {day.name}
            </Button>
          ))}
        </div>

        <div className="flex flex-col md:flex-row justify-center gap-4 mb-8">
          <Button
            onClick={handleCompanyParty}
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-8 px-12 rounded-2xl shadow-2xl hover:scale-110 transition-all text-xl md:text-2xl animate-bounce-slow"
          >
            <PartyPopper className="w-8 h-8 mr-3" />
            Festa da Empresa
            <PartyPopper className="w-8 h-8 ml-3" />
          </Button>

          <Button
            onClick={generateYearEndExcuse}
            className="bg-gradient-to-r from-red-600 via-green-600 to-red-600 hover:from-red-700 hover:via-green-700 hover:to-red-700 text-white font-bold py-8 px-12 rounded-2xl shadow-2xl hover:scale-110 transition-all text-xl md:text-2xl animate-bounce-slow"
          >
            <span className="text-2xl mr-3">🎄</span>
            Desculpa de Fim de Ano
            <span className="text-2xl ml-3">🎅</span>
          </Button>
        </div>

        {currentExcuse && (
          <div
            className={`mb-8 p-8 rounded-2xl ${isDarkMode ? "bg-gray-800/70" : "bg-white/70"} backdrop-blur-md shadow-2xl animate-slide-in`}
          >
            <div className="flex items-start justify-between mb-4">
              <Baby className={`w-12 h-12 ${isDarkMode ? "text-blue-400" : "text-blue-600"}`} />
              <div className="flex gap-2">
                <Button
                  onClick={saveFavorite}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white p-2 rounded-lg"
                  title="Salvar favorito"
                >
                  ⭐
                </Button>
                <Button onClick={shareExcuse} className="bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-lg">
                  <Share2 className="w-5 h-5" />
                </Button>
              </div>
            </div>
            <p className={`text-2xl md:text-3xl font-semibold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              {currentExcuse}
            </p>
            {showTimer && (
              <div className="flex items-center gap-3">
                <span className={`text-xl font-bold ${isDarkMode ? "text-red-400" : "text-red-600"} animate-pulse`}>
                  ⏰ Saindo em: {timerCount}s
                </span>
                <span className="text-2xl animate-bounce">😭</span>
              </div>
            )}
          </div>
        )}

        {showPartyResponse && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm animate-fade-in">
            <div className="text-center p-12 max-w-4xl">
              <h2
                className={`text-4xl md:text-7xl font-black mb-8 animate-pulse ${
                  partyResponseType === "wife"
                    ? "text-red-500"
                    : partyResponseType === "lunch"
                      ? "text-yellow-400"
                      : partyResponseType === "epic"
                        ? "text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-yellow-500 to-green-500"
                        : "text-pink-500"
                }`}
              >
                {partyResponseText}
              </h2>
              {partyResponseType === "lunch" && <div className="text-8xl animate-spin-slow">🍽️</div>}
              {partyResponseType === "wife" && (
                <div className="flex justify-center gap-4 text-6xl">
                  {[...Array(10)].map((_, i) => (
                    <span key={i} className="animate-fall" style={{ animationDelay: `${i * 0.1}s` }}>
                      🎊
                    </span>
                  ))}
                </div>
              )}
              {partyResponseType === "epic" && (
                <div className="flex justify-center gap-4 text-6xl animate-shake">
                  <span>🎄</span>
                  <span>🎅</span>
                  <span>🎁</span>
                  <span>⭐</span>
                  <span>❄️</span>
                </div>
              )}
            </div>
          </div>
        )}

        {showChaosModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md animate-fade-in overflow-hidden">
            <button
              onClick={() => setShowChaosModal(false)}
              className="absolute top-6 right-6 z-20 text-white/70 hover:text-white text-4xl font-bold hover:scale-110 transition-all bg-black/50 rounded-full w-14 h-14 flex items-center justify-center"
              aria-label="Fechar"
            >
              ✕
            </button>

            {/* Confetes caindo */}
            {chaosConfetti.map((confetti, i) => (
              <div
                key={i}
                className="absolute animate-confetti"
                style={{
                  left: `${confetti.left}%`,
                  animationDelay: `${confetti.delay}s`,
                  color: confetti.color,
                }}
              >
                🎊
              </div>
            ))}

            <div className="text-center p-8 max-w-4xl relative z-10 animate-rainbow-bg rounded-3xl">
              <h2 className="text-5xl md:text-8xl font-black mb-6 text-white animate-shake">🔥 100% ATIVADO! 🔥</h2>
              <p className="text-3xl md:text-5xl font-bold text-yellow-300 mb-8 animate-pulse">
                O JÃO ATINGIU O MODO CAOS TOTAL!
              </p>

              {/* Emojis girando */}
              <div className="flex justify-center gap-4 text-5xl mb-8">
                {["👶", "🍼", "😭", "🎉", "💀", "🤣", "🔥", "🎊"].map((emoji, i) => (
                  <span key={i} className="animate-spin-slow" style={{ animationDelay: `${i * 0.2}s` }}>
                    {emoji}
                  </span>
                ))}
              </div>

              <p className="text-2xl text-white mb-8">
                Total de desculpas geradas: <span className="text-yellow-300 font-bold">{excuseCount}</span>
              </p>

              <Button
                onClick={() => setShowChaosModal(false)}
                className="bg-gradient-to-r from-green-500 to-blue-500 hover:from-green-600 hover:to-blue-600 text-white font-bold py-4 px-12 rounded-xl text-2xl shadow-2xl hover:scale-110 transition-all"
              >
                CONTINUAR O CAOS! 🚀
              </Button>
            </div>
          </div>
        )}

        <div className={`mb-8 p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm`}>
          <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Desculpa Personalizada
          </h3>
          <div className="flex gap-3">
            <input
              type="text"
              value={customExcuse}
              onChange={(e) => setCustomExcuse(e.target.value)}
              placeholder="Ex: chorando por brinquedo"
              className={`flex-1 px-4 py-3 rounded-lg ${isDarkMode ? "bg-gray-700 text-white" : "bg-white text-gray-800"}`}
            />
            <Button
              onClick={generateCustomExcuse}
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold"
            >
              Gerar
            </Button>
          </div>
        </div>

        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={toggleInfiniteMode}
            className={`${infiniteMode ? "bg-red-500 hover:bg-red-600" : "bg-purple-500 hover:bg-purple-600"} text-white font-bold py-4 px-8 rounded-xl shadow-lg`}
          >
            <Sparkles className="w-5 h-5 mr-2" />
            {infiniteMode ? "Parar" : "Modo Infinito"}
          </Button>
        </div>

        {infiniteMode && infiniteExcuses.length > 0 && (
          <div
            className={`mb-8 p-6 rounded-xl ${isDarkMode ? "bg-gray-800/70" : "bg-white/70"} backdrop-blur-md max-h-96 overflow-y-auto`}
          >
            <h3 className={`text-xl font-bold mb-4 ${isDarkMode ? "text-white" : "text-gray-800"}`}>
              Feed de Desculpas Infinitas
            </h3>
            {infiniteExcuses.map((excuse, i) => (
              <div
                key={i}
                className={`mb-3 p-3 rounded-lg ${isDarkMode ? "bg-gray-700" : "bg-gray-100"} animate-slide-in`}
              >
                <p className={`${isDarkMode ? "text-gray-200" : "text-gray-700"}`}>{excuse}</p>
              </div>
            ))}
          </div>
        )}

        <div
          className={`text-center mb-8 p-6 rounded-xl ${isDarkMode ? "bg-gray-800/50" : "bg-white/50"} backdrop-blur-sm`}
        >
          <p className={`text-2xl font-bold ${isDarkMode ? "text-white" : "text-gray-800"}`}>
            Desculpas Geradas: {excuseCount} 🎯
          </p>
        </div>

        <footer className={`text-center text-sm ${isDarkMode ? "text-gray-400" : "text-gray-600"} italic`}>
          Gerado por IA para zoar o João – não use essas desculpas em calls reais, somente se tirar 30 dias de férias 😄
        </footer>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes slide-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes fall {
          from { transform: translateY(-100vh); }
          to { transform: translateY(100vh); }
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes snow {
          0% { transform: translateY(-100vh) rotate(0deg); }
          100% { transform: translateY(100vh) rotate(360deg); }
        }
        @keyframes confetti {
          0% { transform: translateY(-100vh) rotate(0deg); opacity: 1; }
          100% { transform: translateY(100vh) rotate(720deg); opacity: 0; }
        }
        @keyframes rainbow-bg {
          0% { filter: hue-rotate(0deg); }
          100% { filter: hue-rotate(360deg); }
        }
        @keyframes shake {
          0%, 100% { transform: translateX(0); }
          10%, 30%, 50%, 70%, 90% { transform: translateX(-5px); }
          20%, 40%, 60%, 80% { transform: translateX(5px); }
        }
        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        .animate-float { animation: float linear infinite; }
        .animate-slide-in { animation: slide-in 0.5s ease-out; }
        .animate-fade-in { animation: fade-in 0.3s ease-out; }
        .animate-fall { animation: fall 2s linear infinite; }
        .animate-bounce-slow { animation: bounce-slow 2s ease-in-out infinite; }
        .animate-spin-slow { animation: spin-slow 3s linear infinite; }
        .animate-snow { animation: snow 8s linear infinite; }
        .animate-confetti { animation: confetti 3s linear infinite; font-size: 30px; }
        .animate-rainbow-bg { animation: rainbow-bg 2s linear infinite; }
        .animate-shake { animation: shake 0.5s ease-in-out infinite; }
        .animate-pulse-slow { animation: pulse-slow 3s ease-in-out infinite; }
      `}</style>
    </div>
  )
}
