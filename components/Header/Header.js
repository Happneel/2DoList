// Header.js
import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import Logo from "../../assets/logo.png";
import styles from './HeaderStyles';

const Header = ({ showSettings, showModal }) => {
    return (
        <View style={styles.header}>
            {/* Logo de l'application */}
            <Image style={styles.logo} source={Logo} />
            {/* Titre de l'application */}
            <Text style={styles.title}>Tu as probablement des trucs à faire</Text>
            {/* Bouton pour ajouter une nouvelle tâche */}
            <TouchableOpacity
                style={styles.newTask}
                onPress={showModal}
            >
                <Text style={styles.newTaskText}>+</Text>
            </TouchableOpacity>
            {/* Bouton pour afficher les paramètres */}
            <TouchableOpacity
                style={styles.settings}
                onPress={showSettings}
            >
                <Text style={styles.settingsText}>⚙️</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Header;
