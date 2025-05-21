interface SubscribeData {
  email: string;
}

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function subscribeToNewsletter(data: SubscribeData): Promise<{ success: boolean; message: string }> {
  try {
    // Simple validation
    if (!data.email.includes('@')) {
      return { 
        success: false, 
        message: "Please enter a valid email address"
      };
    }

    // In a real app, you would make an actual POST request:
    const response = await fetch(`${API_BASE_URL}/api/subscriptions/`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    const result = await response.json();
    return result;

  } catch (error) {
    console.error("Error subscribing:", error);
    return {
      success: false,
      message: "An unexpected error occurred. Please try again later."
    };
  }
}
