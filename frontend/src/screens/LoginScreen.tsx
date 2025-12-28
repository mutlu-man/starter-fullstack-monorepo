import { View, Image, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { login } from '../services/auth';
import { useAuth } from 'src/context/AuthContext';

export default function LoginScreen({ navigation }: any) {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const { setIsAuthenticated } = useAuth();

    const handleLogin = async () => {
        try {
            setLoading(true);
            setError('');
            const res = await login({ email, password });
            setIsAuthenticated(true);
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };



    return (
        <View style={styles.container}>
            <Image
                source={require('../../assets/logoipsum-410.png')}
                style={styles.logo}
                resizeMode="contain"
            />

            <Text style={styles.title}>Starter App</Text>
            <Text style={styles.subtitle}>Some Slogan</Text>

            <TextInput
                placeholder="E-Mail"
                value={email}
                onChangeText={setEmail}
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                placeholder="Password"
                value={password}
                onChangeText={setPassword}
                placeholderTextColor="#9CA3AF"
                style={styles.input}
                secureTextEntry
            />

            {error !== '' && (
                <Text style={{ color: 'red', textAlign: 'center', marginBottom: 8 }}>
                    {error}
                </Text>
            )}


            <TouchableOpacity
                style={styles.button}
                onPress={handleLogin}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? 'Loading…' : 'Login'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity>
                <Text style={styles.link}>Forgot Passoword?</Text>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => navigation.navigate('Register')}>
                <Text style={styles.linkSecondary}>
                    Noch kein Konto? <Text style={styles.linkBold}>Register</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    title: {
        fontSize: 32,
        fontWeight: '700',
        color: '#111827',
        marginBottom: 4,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#6B7280',
        marginBottom: 32,
        textAlign: 'center',
    },
    input: {
        height: 52,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 16,
        fontSize: 16,
        color: '#111827',
        marginBottom: 16,
    },
    button: {
        height: 52,
        backgroundColor: '#10a184ff', // Akzent-Grün
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
    },
    link: {
        textAlign: 'center',
        color: '#10a184ff',
        marginBottom: 12,
    },
    linkSecondary: {
        textAlign: 'center',
        color: '#6B7280',
    },
    linkBold: {
        color: '#10a184ff',
        fontWeight: '600',
    },
    logo: {
        width: '100%',
        height: 100,
        alignSelf: 'center',
    },
});

