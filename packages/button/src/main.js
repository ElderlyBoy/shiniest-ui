import '../../stylesheet/button.scss'
export default {
  name: 'ShButton',
  props: {
    type: { type: String, default: 'default' },
    disabled: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    size: { type: String, default: 'small' }
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
          'sh-button__plain': this.plain,
          'sh-button__disabled': this.disabled,
          'sh-button__round': this.round
        }
      ],
      on: {
        click: this.click
      },
      attrs: {
        type: 'button',
        disabled: this.disabled
      }
    }, this.$slots.default)
  }
}