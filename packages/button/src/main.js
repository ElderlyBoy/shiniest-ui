import '../../stylesheet/button.scss'
export default {
  name: 'ShButton',
  props: {
    type: { type: String, default: 'default' },
    disabled: { type: Boolean, default: false },
    plan: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    size: { type: String, default: 'medium' }
  },
  methods: {
    click(){
      this.$emit('click', event)
    }
  },
  render(h) {
    return h('button', {
      'class': [
        'sh-button',
        `sh-button__${this.type}`,
        `sh-button__${this.size}`,
        {
          'sh-button__plan': this.plan,
          'sh-button__disabled': this.disabled,
          'sh-button__round': this.round
        }
      ],
      on: {
        click: this.click
      },
      attrs: {
        type: 'button'
      }
    }, this.$slots.default)
  }
}