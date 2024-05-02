import { Box, Flex, Text, VStack, Heading, Input, Button, Link } from '@chakra-ui/react';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" p={4} justifyContent="space-between" bg="gray.100" align="center">
        <Heading size="md">My Portfolio</Heading>
        <Box>
          <Link href="#about" mx={2}>About</Link>
          <Link href="#portfolio" mx={2}>Portfolio</Link>
          <Link href="#contact" mx={2}>Contact</Link>
        </Box>
      </Flex>
      <Box id="about" p={4}>
        <Heading size="lg" mb={2}>About Me</Heading>
        <Text fontSize="md">I am a passionate web developer with a knack for creating beautiful and functional websites.</Text>
      </Box>
      <Box id="portfolio" p={4}>
        <Heading size="lg" mb={2}>Portfolio</Heading>
        <VStack spacing={4}>
          <Text fontSize="md">Project 1: E-commerce Website</Text>
          <Text fontSize="md">Project 2: Personal Blog</Text>
          <Text fontSize="md">Project 3: Business Landing Page</Text>
        </VStack>
      </Box>
      <Box id="contact" p={4} bg="gray.100">
        <Heading size="lg" mb={2}>Contact Me</Heading>
        <VStack spacing={4}>
          <Input placeholder="Your Name" />
          <Input placeholder="Your Email" />
          <Button colorScheme="blue" leftIcon={<FaEnvelope />}>Send Message</Button>
        </VStack>
      </Box>
      <Flex p={4} justifyContent="center" gap={4}>
        <Link href="https://github.com" isExternal><FaGithub size="24px" /></Link>
        <Link href="https://linkedin.com" isExternal><FaLinkedin size="24px" /></Link>
      </Flex>
    </Box>
  );
};

export default Index;