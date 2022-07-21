// 通过函数自定义高亮效果
// nav 在 public/index.html 文件中

export default function computedClassName({ isActive }) {
  return isActive ? 'list-group-item navLink' : 'list-group-item'
}