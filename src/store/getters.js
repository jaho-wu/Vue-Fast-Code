const getters = {
  drawViews: state => state.DrawViews.drawViews,
  formConf: state => state.DrawViews.formConf,
  activeEl: state => state.ActiveComp.activeEl,
  activeId: state => state.ActiveComp.activeId,
  dragEl: state => state.Draggable.dragEl,
  run: state => state.Btns.run,
  json: state => state.Btns.json,
  compBorder: state => state.Btns.compBorder,
  locked: state => state.Btns.locked
}
export default getters
