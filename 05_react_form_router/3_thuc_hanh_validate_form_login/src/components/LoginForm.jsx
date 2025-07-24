import React from 'react';
import { useForm } from 'react-hook-form';

function LoginForm() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({ mode: 'onBlur' });

    const onSubmit = (data) => {
        console.log('Login successful!', data);
        alert(`Đăng nhập thành công!\nEmail: ${data.email}\nPassword: ${data.password}`);
    };

    const onError = (errors) => {
        console.error('Validation errors:', errors);
        alert('Vui lòng kiểm tra lại thông tin đăng nhập.');
    };

    return (
        <form onSubmit={handleSubmit(onSubmit, onError)}>
            <div>
                <label htmlFor="email">Email:</label>
                <input
                    id="email"
                    type="text"
                    placeholder="Nhập email của bạn"
                    {...register('email', {
                        required: 'Email là bắt buộc',
                        pattern: {
                            value: /^[a-zA-Z0-9+-]+@[a-zA-Z0-9-]+(\.[a-zA-Z]{2,4})+$/,
                            message: 'Email không hợp lệ. Vui lòng kiểm tra định dạng.',
                        },
                    })}
                />
                {errors.email && <p>{errors.email.message}</p>}
            </div>

            <div>
                <label htmlFor="password">Mật khẩu:</label>
                <input
                    id="password"
                    type="password"
                    placeholder="Nhập mật khẩu của bạn"
                    {...register('password', {
                        required: 'Mật khẩu là bắt buộc',
                        minLength: {
                            value: 6,
                            message: 'Mật khẩu phải có ít nhất 6 ký tự.',
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9!@#$%^&()+=._-]+$/,
                            message: 'Mật khẩu chỉ chấp nhận a-z, A-Z, 0-9 và !@#$%^&()+=._-',
                        },
                    })}
                />
                {errors.password && <p>{errors.password.message}</p>}
            </div>

            <button type="submit">Đăng nhập</button>
        </form>
    );
}

export default LoginForm;
