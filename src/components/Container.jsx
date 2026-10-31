const Container = ({children, className = ""}) => {
  return (
    <div className={`site-container mx-auto max-w-[1248px] px-6 ${className}`}>
      {children}
    </div>
  )
}

export default Container
 