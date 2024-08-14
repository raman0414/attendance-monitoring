export default defineNuxtRouteMiddleware((to, from) => {
    const user = useUser() // Assume you have a composable that manages user state
  
    if (!user.isLoggedIn && to.path !== '/login') {
      return navigateTo('/login')
    }
  })