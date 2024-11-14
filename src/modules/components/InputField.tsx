import React,{forwardRef, useRef } from 'react';
import { TextInput, Pressable,TextInputProps, Platform } from 'react-native';

export const InputField = forwardRef((
  props: {
    input:TextInputProps
  },
  ref?: React.Ref<TextInput>,
) => {
  const inputRef: any = useRef<TextInput>(null);

  const focusInput = (): void => {
    if(ref && typeof ref !== 'function' && ref.current){
      ref.current.focus();
    }
  }
  if(Platform.OS==='android'){
    ref = ref ? ref : inputRef;
  }

  return(
    <>
    {
      Platform.OS==='android'? 
      <Pressable onPress={()=>focusInput()}>
        <TextInput {...props.input} ref={ref} />
      </Pressable> 
      : <TextInput  {...props.input} ref={ref}/>
      }
    </>
  );
});
