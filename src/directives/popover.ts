import { Popover } from 'bootstrap'

export const popover = {

  mounted(el: Element) {
    new Popover(el)
  },

}