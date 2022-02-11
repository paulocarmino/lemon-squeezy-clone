const checkCurrentsPath = (navigation: any, router: any) => {
  const updatedNavigation = navigation.map((menu: any) => {
    if (menu.href === router.pathname) {
      menu.current = true
    } else {
      menu.current = false
    }

    if (menu.children) {
      menu.children.map((submenu: any) => {
        if (submenu.href === router.pathname) {
          submenu.current = true
          menu.current = true
        } else {
          submenu.current = false
        }
      })
    }

    return menu
  })

  return updatedNavigation
}

export default checkCurrentsPath
