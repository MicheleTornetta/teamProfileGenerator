// https://www.placecage.com/200/300
/**
 * Generates a placeholder img tag.
 * @param {Number} width 
 * @param {Number} height 
 * @returns Image Tag
 */
 function renderPlaceholder(width, height){
    return `<img src="https://www.placecage.com/${width}/${height}" alt="placeholder image" />`;
  }
  
  module.exports = {
    renderPlaceholder
  };