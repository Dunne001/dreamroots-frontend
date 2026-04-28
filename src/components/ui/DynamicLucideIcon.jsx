import * as Icons from 'lucide-react'

// Convert kebab-case to PascalCase
// Example: "graduation-cap" -> "GraduationCap"
const toPascalCase = (str) => {
  return str
    .split('-')
    .map(part => part.charAt(0).toUpperCase() + part.slice(1))
    .join('')
}

const DynamicLucideIcon = ({ name, size = 24, color = 'currentColor', strokeWidth = 1.5 }) => {
  // Convert the name to PascalCase to match Lucide component names
  const componentName = toPascalCase(name)
  const IconComponent = Icons[componentName]

  if (!IconComponent) {
    console.warn(`Icon "${name}" (converted to "${componentName}") not found, using Circle`)
    return <Icons.Circle size={size} color={color} strokeWidth={strokeWidth} />
  }

  return <IconComponent size={size} color={color} strokeWidth={strokeWidth} />
}

export default DynamicLucideIcon