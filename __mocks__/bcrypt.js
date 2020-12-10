module.exports = {
  isValid: true,
  values: '',
  hash: '',
  async compare (value, hash) {
    this.value = value
    this.hash = hash
    return this.isValid
  }
}
