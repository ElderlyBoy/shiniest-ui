import '../../stylesheet/button.scss'
export default {
  name: 'ShButton',
  props: {
    type: { type: String, default: 'default' },
    disabled: { type: Boolean, default: false },
    plain: { type: Boolean, default: false },
    round: { type: Boolean, default: false },
    size: { type: String, default: '' }
  },
  inject: {
    shForm: {
      default: () => ({})
    }
  },
  computed: {
    buttonSize(){
      return this.size || this.$SHINIEST.size || this.shForm.size
    }
  },
  methods: {
    click(e){
      this.$emit('click', e)
    }
  },
  render(h) {
    return h('button', {
      'class': [
        'sh-button',
        `sh-button__${this.type}`,
        `sh-button__${this.buttonSize}`,
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