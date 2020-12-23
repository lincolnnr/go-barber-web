import React, { useCallback, useRef } from 'react';
import { FiArrowLeft, FiMail, FiUser, FiLock } from 'react-icons/fi';
import { FormHandles } from '@unform/core';
import { Form } from '@unform/web';
import * as Yup from 'yup';
import getValidationErrors from '../../utils/getValidationErros';


import {Container, Content, Background} from './styles';

import logoImg from '../../assets/logo.svg';

import Input from '../../components/Input';
import Button from '../../components/Button';

const SignUp: React.FC = () => {
    const formRef = useRef<FormHandles>(null);

    const handleSubmit = useCallback(async (data: object) => {
        try {
            formRef.current?.setErrors({});

            const schema = Yup.object().shape({
                name: Yup.string().required('Nome obrigatório'),
                email: Yup.string().required('E-mail obrigatório').email('Digite um e-mail válido'),
                password: Yup.string().min(6, 'Senha deve conter minímo de 6 dígitos'),  
            });

            await schema.validate(data, {
                abortEarly: false,
            });

            
        } catch (err){
            const errors = getValidationErrors(err);

            formRef.current?.setErrors(errors);
        }
    }, []);

    return (
    <Container>
        <Background />
        <Content>
            <img src={logoImg} alt="Go Barber"/>
            <Form ref={formRef} onSubmit={handleSubmit}  >
                <h1>Faça seu cadastro</h1>
                <Input icon={FiUser} name="name" placeholder="Nome" />
                <Input icon={FiMail} name="email" placeholder="E-mail" />
                <Input type="password" name="password" icon={FiLock} placeholder="Senha" />
                <Button type="submit">Cadastrar</Button>
            </Form>
            <a href=""><FiArrowLeft /> Voltar para logon</a>
        </Content>
    </Container>   
)};

export default SignUp;