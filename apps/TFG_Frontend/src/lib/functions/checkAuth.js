import { getCurrentBrowserFingerPrint } from '@rajesh896/broprint.js'
import { onMount } from 'svelte'
export async function checkAuth () {
  //Get the fingerprint of the current browser and store it in a variable called fingerprint for access on OnMount
  onMount(async () => {
    let fingerprint = await getCurrentBrowserFingerPrint()
    // Obten las cookies
    let cookies = document.cookie.split(';')
    if (!cookies) {
      window.location.href = '/login'
      return
    }
    // Busca la cookie que contiene el token
    let tokenCookie = cookies.find(cookie => cookie.includes('token'))
    if (!tokenCookie) {
      window.location.href = '/login'
      return
    }
    // Extrae el token de la cookie
    let token = tokenCookie.split('=')[1]

    if (!token) {
      window.location.href = '/login'
      return
    }

    // Comprueba que el token sea válido
    let response = await fetch(
      `${import.meta.env.VITE_BACKEND_URL}/auth/check`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ token, fingerprint })
      }
    )
    let data = await response.json()

    if (data.message === 'Token valido') {
      localStorage.setItem('rol', data.data.rol)
      localStorage.setItem('id', data.data.id)
      localStorage.setItem('nombre', data.data.nombre)
      localStorage.setItem('arbitro', data.data.arbitro)
      localStorage.setItem('club', data.data.club)
    } else {
      document.cookie = 'token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;'
      window.location.href = '/login'
      return
    }
    const url = window.location.pathname.split('/')[1]
    if (url !== data.data.rol) {
      window.location.href = `/${data.data.rol}`
      return
    }
  })
}
