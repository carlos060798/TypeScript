function MyButton({ title }: { title: string }) {
    return (
      <button>{title}</button>
    );
  }
  

  export default MyButton;

  // ejemplo de uso de interfaces para pasar mejor los parametros de las funciones

  interface MyButtonProps {
    /** The text to display inside the button */
    title: string;
    /** Whether the button can be interacted with */
    disabled: boolean;
  }
  
  export function MyButton2({ title, disabled }: MyButtonProps) {
    return (
      <button disabled={disabled}>{title}</button>
    );
  }


