import java.nio.file.*;
import java.util.*;
import org.json.*;

public class DataLoader {

    static int calculateSkillScore(Set<String> cSkills, Set<String> iSkills) {
        int score = 0;
        for (String skill : cSkills) {
            if (iSkills.contains(skill)) score++;
        }
        return score;
    }

    public static void main(String[] args) throws Exception {

        String content = Files.readString(Path.of("data.json"));
        JSONObject root = new JSONObject(content);

        JSONArray candidatesArr = root.getJSONArray("candidates");
        JSONArray interviewersArr = root.getJSONArray("interviewers");

        Map<String, Set<String>> candidates = new HashMap<>();
        Map<String, Set<String>> interviewers = new HashMap<>();
        Map<String, List<String>> candidateAvailability = new HashMap<>();
        Map<String, List<String>> interviewerAvailability = new HashMap<>();

        // Load candidates
        for (int i = 0; i < candidatesArr.length(); i++) {
            JSONObject c = candidatesArr.getJSONObject(i);
            String id = c.getString("candidateId");

            Set<String> skills = new HashSet<>();
            c.getJSONArray("skills").forEach(s -> skills.add(s.toString()));

            List<String> slots = new ArrayList<>();
            c.getJSONArray("availability").forEach(a -> slots.add(a.toString()));

            candidates.put(id, skills);
            candidateAvailability.put(id, slots);
        }

        // Load interviewers
        for (int i = 0; i < interviewersArr.length(); i++) {
            JSONObject it = interviewersArr.getJSONObject(i);
            String id = it.getString("interviewerId");

            Set<String> skills = new HashSet<>();
            it.getJSONArray("skills").forEach(s -> skills.add(s.toString()));

            List<String> slots = new ArrayList<>();
            it.getJSONArray("availability").forEach(a -> slots.add(a.toString()));

            interviewers.put(id, skills);
            interviewerAvailability.put(id, slots);
        }

        // Greedy Scheduling
        System.out.println("Final Interview Schedule:");
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
                System.out.println(
                        "Candidate " + candidate +
                        " assigned to Interviewer " + bestInterviewer
                );
            } else {
                System.out.println(
                        "Candidate " + candidate +
                        " could not be scheduled"
                );
            }
        }
    }
}
