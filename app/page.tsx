'use client'
import { useState, useEffect } from 'react'
import { Play, Coffee, StopCircle, MapPin } from 'lucide-react'

export default function Home() {
  const [status, setStatus] = useState('Не начата')
  const [timer, setTimer] = useState(0)
  const [running, setRunning] = useState(false)

  useEffect(() => {
    let interval: any
    if (running) interval = setInterval(() => setTimer(t => t + 1), 1000)
    return () => clearInterval(interval)
  }, [running])

  const formatTime = (s: number) => {
    const h = Math.floor(s / 3600).toString().padStart(2, '0')
    const m = Math.floor((s % 3600) / 60).toString().padStart(2, '0')
    const sec = (s % 60).toString().padStart(2, '0')
    return `${h}:${m}:${sec}`
  }

  return (
    <div className="min-h-screen p-4 pb-24 bg-[#1E3A8A] text-white">
      <div className="text-center mb-8 pt-8">
        <div className="text-4xl font-bold mb-2">⚙️ DMAG</div>
      </div>

      <div className="bg-white/10 rounded-3xl p-6 mb-6 text-center">
        <div className="text-sm opacity-70 mb-2">Сегодняшний статус</div>
        <div className="text-2xl font-bold mb-4">{status}</div>
        <div className="text-5xl font-mono font-bold">{formatTime(timer)}</div>
        <div className="text-sm mt-2 opacity-70">Текущая смена</div>
      </div>

      <div className="grid grid-cols-2 gap-4 mb-6">
        <button onClick={() => {setStatus('Работает'); setRunning(true)}}
          className="bg-[#16A34A] p-6 rounded-2xl flex-col items-center gap-2">
          <Play size={32} /> Начать работу
        </button>
        <button onClick={() => setStatus('На обеде')}
          className="bg-[#F59E0B] p-6 rounded-2xl flex-col items-center gap-2">
          <Coffee size={32} /> Начать обед
        </button>
        <button onClick={() => setStatus('Работает')}
          className="bg-[#F59E0B] p-6 rounded-2xl flex-col items-center gap-2">
          <Coffee size={32} /> Закончить обед
        </button>
        <button onClick={() => {setStatus('Завершена'); setRunning(false)}}
          className="bg-[#DC2626] p-6 rounded-2xl flex-col items-center gap-2">
          <StopCircle size={32} /> Закончить смену
        </button>
      </div>

      <button className="w-full bg-white/10 p-4 rounded-2xl flex items-center justify-center gap-2">
        <MapPin size={20} /> Добавить время в дороге
      </button>

      <div className="fixed bottom-0 left-0 right-0 bg-[#1E293B] flex justify-around p-4">
        <div className="text-[#16A34A] font-bold">Главная</div>
        <div>Записи</div>
        <div>Чат</div>
        <div>Настройки</div>
      </div>
    </div>
  )
}
