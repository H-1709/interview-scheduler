import java.util.*;

public class Scheduler {

    static int calculateSkillScore(Set<String> cSkills, Set<String> iSkills) {
        int score = 0;
        for (String skill : cSkills) {
            if (iSkills.contains(skill)) {
                score++;
            }
        }
        return score;
    }

    public static void main(String[] args) {

        // Candidates
        Map<String, Set<String>> candidates = new HashMap<>();
        candidates.put("C101", new HashSet<>(Arrays.asList("Java", "DSA", "SQL")));
        candidates.put("C102", new HashSet<>(Arrays.asList("Python", "ML")));

        // Interviewers
        Map<String, Set<String>> interviewers = new HashMap<>();
        interviewers.put("I201", new HashSet<>(Arrays.asList("Java", "System Design")));
        interviewers.put("I202", new HashSet<>(Arrays.asList("Python", "ML")));

        // Availability
        Map<String, List<String>> candidateAvailability = new HashMap<>();
        candidateAvailability.put("C101", Arrays.asList("10AM", "11AM"));
        candidateAvailability.put("C102", Arrays.asList("11AM"));

        Map<String, List<String>> interviewerAvailability = new HashMap<>();
        interviewerAvailability.put("I201", Arrays.asList("10AM"));
        interviewerAvailability.put("I202", Arrays.asList("11AM"));

        // Greedy Scheduling
        Map<String, String> finalSchedule = new HashMap<>();

        for (String candidate : candidates.keySet()) {
            int bestScore = -1;
            String bestInterviewer = null;

            for (String interviewer : interviewers.keySet()) {

                int score = calculateSkillScore(
                        candidates.get(candidate),
                        interviewers.get(interviewer)
                );

                boolean hasCommonSlot = false;
                for (String slot : candidateAvailability.get(candidate)) {
                    if (interviewerAvailability.get(interviewer).contains(slot)) {
                        hasCommonSlot = true;
                        break;
                    }
                }

                if (score > bestScore && hasCommonSlot) {
                    bestScore = score;
                    bestInterviewer = interviewer;
                }
            }

            if (bestInterviewer != null) {
                finalSchedule.put(candidate, bestInterviewer);
            }
        }

        // Output
        System.out.println("Final Interview Schedule:");
        for (String candidate : finalSchedule.keySet()) {
            System.out.println(
                "Candidate " + candidate +
                " assigned to Interviewer " +
                finalSchedule.get(candidate)
            );
        }
    }
}
