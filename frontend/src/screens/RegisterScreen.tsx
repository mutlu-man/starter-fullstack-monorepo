import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { register } from '../services/auth';

export default function RegisterScreen({ navigation }: any) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleRegister = async () => {
        if (password !== confirm) {
            setError('Passwörter stimmen nicht überein');
            return;
        }

        try {
            setLoading(true);
            setError('');
            await register({ email, password });
            navigation.replace('Login');
        } catch (e: any) {
            setError(e.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Konto erstellen</Text>
            <Text style={styles.subtitle}>Starte in deiner Nachbarschaft</Text>

            <TextInput
                placeholder="E-Mail"
                value={email}
                onChangeText={setEmail}
                style={styles.input}
                autoCapitalize="none"
                keyboardType="email-address"
            />

            <TextInput
                placeholder="Passwort"
                value={password}
                onChangeText={setPassword}
                style={styles.input}
                secureTextEntry
            />

            <TextInput
                placeholder="Passwort bestätigen"
                value={confirm}
                onChangeText={setConfirm}
                style={styles.input}
                secureTextEntry
            />

            {error !== '' && (
                <Text style={styles.error}>{error}</Text>
            )}

            <TouchableOpacity
                style={styles.button}
                onPress={handleRegister}
                disabled={loading}
            >
                <Text style={styles.buttonText}>
                    {loading ? 'Lädt…' : 'Registrieren'}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => navigation.goBack()}>
                <Text style={styles.link}>
                    Schon ein Konto? <Text style={styles.linkBold}>Anmelden</Text>
                </Text>
            </TouchableOpacity>
        </View>
    );
}

const PRIMARY = '#10A184';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: 24,
        justifyContent: 'center',
    },
    logo: {
        width: '100%',
        height: 100,
        alignSelf: 'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '700',
        color: '#111827',
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 15,
        color: '#6B7280',
        textAlign: 'center',
        marginBottom: 24,
    },
    input: {
        height: 52,
        borderWidth: 1,
        borderColor: '#E5E7EB',
        borderRadius: 12,
        paddingHorizontal: 16,
        marginBottom: 16,
    },
    button: {
        height: 52,
        backgroundColor: PRIMARY,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 8,
        marginBottom: 16,
    },
    buttonText: {
        color: '#fff',
        fontWeight: '600',
        fontSize: 16,
    },
    link: {
        textAlign: 'center',
        color: '#6B7280',
    },
    linkBold: {
        color: PRIMARY,
        fontWeight: '600',
    },
    error: {
        color: 'red'
    }
});

